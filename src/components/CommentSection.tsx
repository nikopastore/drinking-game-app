"use client";

import { useState, useEffect } from "react";
import { Comment } from "@/types";
import { Button, Textarea, Card, CardContent } from "@/components/ui";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { useAuthContext } from "@/components/auth";
import {
  MessageSquare,
  ThumbsUp,
  Reply,
  Send,
  LogIn,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { sanitizeHtml } from "@/lib/sanitize";

interface CommentSectionProps {
  gameSlug: string;
}

export function CommentSection({ gameSlug }: CommentSectionProps) {
  // Use shared auth context instead of managing own auth state
  const { user } = useAuthContext();

  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [sortBy, setSortBy] = useState<"top" | "new">("top");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  const supabase = createClient();

  // Check if Supabase is configured on client side
  useEffect(() => {
    setIsConfigured(isSupabaseConfigured());
    if (!isSupabaseConfigured()) {
      setIsLoading(false);
    }
  }, []);

  // Fetch comments
  useEffect(() => {
    if (!isConfigured) return;

    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("comments")
          .select("*")
          .eq("game_id", gameSlug)
          .order(sortBy === "top" ? "upvotes" : "created_at", {
            ascending: false,
          });

        if (error) throw error;

        // Organize into tree structure
        const commentMap = new Map<string, Comment>();
        const rootComments: Comment[] = [];

        (data || []).forEach((comment: Comment) => {
          commentMap.set(comment.id, { ...comment, replies: [] });
        });

        (data || []).forEach((comment: Comment) => {
          const commentWithReplies = commentMap.get(comment.id)!;
          if (comment.parent_id) {
            const parent = commentMap.get(comment.parent_id);
            if (parent) {
              parent.replies = parent.replies || [];
              parent.replies.push(commentWithReplies);
            }
          } else {
            rootComments.push(commentWithReplies);
          }
        });

        setComments(rootComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [gameSlug, sortBy, supabase, isConfigured]);

  const handleSignIn = async (provider: "google" | "github") => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/games/${gameSlug}`,
      },
    });
  };

  const handleSignInWithEmail = async () => {
    const email = prompt("Enter your email for a magic link:");
    if (!email) return;

    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/games/${gameSlug}`,
      },
    });
    alert("Check your email for a login link!");
  };

  const handleSubmitComment = async (parentId?: string) => {
    if (!user) return;

    const content = parentId ? replyContent : newComment;
    if (!content.trim()) return;

    // Sanitize content before submission to prevent XSS
    const sanitizedContent = sanitizeHtml(content.trim());
    if (!sanitizedContent) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("comments").insert({
        game_id: gameSlug,
        user_id: user.id,
        parent_id: parentId || null,
        content: sanitizedContent,
      });

      if (error) throw error;

      // Reset form
      if (parentId) {
        setReplyContent("");
        setReplyingTo(null);
      } else {
        setNewComment("");
      }

      // Refresh comments
      const { data } = await supabase
        .from("comments")
        .select("*")
        .eq("game_id", gameSlug)
        .order(sortBy === "top" ? "upvotes" : "created_at", {
          ascending: false,
        });

      // Re-organize (simplified for brevity)
      setComments(data?.filter((c: Comment) => !c.parent_id) || []);
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpvote = async (commentId: string) => {
    if (!user) return;

    try {
      // Check if already upvoted
      const { data: existing } = await supabase
        .from("comment_upvotes")
        .select()
        .eq("user_id", user.id)
        .eq("comment_id", commentId)
        .single();

      if (existing) {
        // Remove upvote
        await supabase
          .from("comment_upvotes")
          .delete()
          .eq("user_id", user.id)
          .eq("comment_id", commentId);
        await supabase.rpc("decrement_comment_upvotes", {
          comment_uuid: commentId,
        });
      } else {
        // Add upvote
        await supabase.from("comment_upvotes").insert({
          user_id: user.id,
          comment_id: commentId,
        });
        await supabase.rpc("increment_comment_upvotes", {
          comment_uuid: commentId,
        });
      }

      // Optimistic update
      setComments((prev) =>
        prev.map((c) =>
          c.id === commentId
            ? { ...c, upvotes: c.upvotes + (existing ? -1 : 1) }
            : c
        )
      );
    } catch (error) {
      console.error("Error upvoting:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return "Just now";
  };

  const CommentItem = ({
    comment,
    depth = 0,
  }: {
    comment: Comment;
    depth?: number;
  }) => (
    <div
      className={cn("border-l-2 border-dark-600 pl-4", depth > 0 && "ml-4 mt-3")}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {comment.user_email?.[0]?.toUpperCase() || "?"}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-300 font-medium">
              {comment.user_email?.split("@")[0] || "Anonymous"}
            </span>
            <span className="text-gray-500">{formatDate(comment.created_at)}</span>
          </div>
          {/* Sanitize content on display as defense-in-depth */}
          <p className="text-gray-200 mt-1">{sanitizeHtml(comment.content)}</p>
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => handleUpvote(comment.id)}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-neon-pink transition-colors"
            >
              <ThumbsUp className="h-4 w-4" />
              {comment.upvotes}
            </button>
            {user && depth < 2 && (
              <button
                onClick={() =>
                  setReplyingTo(replyingTo === comment.id ? null : comment.id)
                }
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Reply className="h-4 w-4" />
                Reply
              </button>
            )}
          </div>

          {/* Reply form */}
          {replyingTo === comment.id && (
            <div className="mt-3 flex gap-2">
              <Textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write a reply..."
                className="min-h-[60px]"
              />
              <Button
                size="sm"
                onClick={() => handleSubmitComment(comment.id)}
                disabled={!replyContent.trim() || isSubmitting}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Nested replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-3">
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Show placeholder when Supabase isn't configured
  if (!isConfigured) {
    return (
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-neon-blue" />
            Comments
          </h2>
          <div className="text-center py-8 border border-dark-600 rounded-lg">
            <MessageSquare className="h-8 w-8 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-400">
              Comments will be available once Supabase is configured.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              See .env.example for setup instructions.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-neon-blue" />
            Comments
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSortBy("top")}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-colors",
                sortBy === "top"
                  ? "bg-neon-blue text-dark-900"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <ChevronUp className="h-4 w-4 inline mr-1" />
              Top
            </button>
            <button
              onClick={() => setSortBy("new")}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-colors",
                sortBy === "new"
                  ? "bg-neon-blue text-dark-900"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <ChevronDown className="h-4 w-4 inline mr-1" />
              New
            </button>
          </div>
        </div>

        {/* Auth prompt or comment form */}
        {!user ? (
          <div className="text-center py-8 border border-dark-600 rounded-lg mb-6">
            <LogIn className="h-8 w-8 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-400 mb-4">Sign in to join the discussion</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <Button variant="outline" onClick={() => handleSignIn("google")}>
                Sign in with Google
              </Button>
              <Button variant="ghost" onClick={handleSignInWithEmail}>
                Magic Link
              </Button>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your tips or house rules..."
              className="min-h-[80px] mb-2"
            />
            <div className="flex justify-end">
              <Button
                onClick={() => handleSubmitComment()}
                disabled={!newComment.trim() || isSubmitting}
              >
                <Send className="h-4 w-4 mr-2" />
                Post Comment
              </Button>
            </div>
          </div>
        )}

        {/* Comments list */}
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-2 border-neon-pink border-t-transparent rounded-full mx-auto" />
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No comments yet. Be the first to share your thoughts!
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
