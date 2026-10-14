import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect, vi } from "vitest";
import { Modal } from "./Modal";
afterEach(cleanup);
describe("dialog keyboard lifecycle", () => {
  it("focuses a labeled dialog and wraps Tab in both directions", () => {
    render(<Modal title="Test dialog" isOpen onClose={() => {}}><button>Last control</button></Modal>);
    const dialog = screen.getByRole("dialog", { name: "Test dialog" });
    const first = screen.getByRole("button", { name: "Close dialog" });
    const last = screen.getByRole("button", { name: "Last control" });
    expect(dialog).toHaveFocus();
    fireEvent.keyDown(document, { key: "Tab" }); expect(first).toHaveFocus();
    fireEvent.keyDown(document, { key: "Tab", shiftKey: true }); expect(last).toHaveFocus();
    fireEvent.keyDown(document, { key: "Tab" }); expect(first).toHaveFocus();
  });
  it("uses the latest close handler without resetting focus on rerender", () => {
    const oldClose = vi.fn(); const newClose = vi.fn();
    const view = render(<Modal title="Test" isOpen onClose={oldClose}><input aria-label="Question" /></Modal>);
    screen.getByRole("textbox").focus();
    view.rerender(<Modal title="Test" isOpen onClose={newClose}><input aria-label="Question" /></Modal>);
    expect(screen.getByRole("textbox")).toHaveFocus();
    fireEvent.keyDown(document, { key: "Escape" }); expect(newClose).toHaveBeenCalledOnce(); expect(oldClose).not.toHaveBeenCalled();
  });
  it("restores focus and the original scroll policy after close", () => {
    const trigger = document.createElement("button"); document.body.append(trigger); trigger.focus();
    document.body.style.overflow = "scroll";
    const view = render(<Modal title="Test" isOpen onClose={() => {}}><button>Inside</button></Modal>);
    expect(document.body.style.overflow).toBe("hidden");
    view.rerender(<Modal title="Test" isOpen={false} onClose={() => {}}><button>Inside</button></Modal>);
    expect(screen.queryByRole("dialog")).toBeNull(); expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe("scroll"); trigger.remove(); document.body.style.overflow = "";
  });
  it("keeps the top dialog active when overlapping dialogs close out of order", () => {
    const lowerClose = vi.fn(); const topClose = vi.fn();
    const view = render(<><Modal title="Lower" isOpen onClose={lowerClose}><button>Lower action</button></Modal><Modal title="Upper" isOpen onClose={topClose}><button>Upper action</button></Modal></>);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(topClose).toHaveBeenCalledOnce(); expect(lowerClose).not.toHaveBeenCalled();
    view.rerender(<><Modal title="Lower" isOpen={false} onClose={lowerClose} /><Modal title="Upper" isOpen onClose={topClose}><button>Upper action</button></Modal></>);
    expect(document.body.style.overflow).toBe("hidden");
    expect(screen.getByRole("dialog", { name: "Upper" }).contains(document.activeElement)).toBe(true);
    view.unmount(); expect(document.body.style.overflow).toBe("");
  });
});
