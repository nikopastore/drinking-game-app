"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FlaskConical, Dice5, CreditCard, Users, GlassWater } from "lucide-react";

// Color palette
const COLORS = {
  bg: "#020617", // slate-950
  pink: "#ec4899",
  purple: "#a855f7",
  cyan: "#22d3ee",
  green: "#10b981",
  white: "#ffffff",
};

// Node configuration
const NODES = [
  { id: "dice", icon: Dice5, color: COLORS.pink, angle: 45, label: "Dice Games" },
  { id: "cards", icon: CreditCard, color: COLORS.purple, angle: 135, label: "Card Games" },
  { id: "cups", icon: GlassWater, color: COLORS.cyan, angle: 225, label: "Cup Games" },
  { id: "group", icon: Users, color: COLORS.green, angle: 315, label: "Group Games" },
];

export function HeroAnimation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const hubControls = useAnimation();
  const beamControls = useAnimation();
  const nodeControls = useAnimation();

  // Entrance animation sequence
  useEffect(() => {
    const runEntrance = async () => {
      // Hub scales up
      await hubControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "backOut" },
      });

      // Beams draw
      await beamControls.start({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });

      // Nodes pop in
      await nodeControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "backOut", staggerChildren: 0.1 },
      });

      setIsLoaded(true);
    };

    runEntrance();
  }, [hubControls, beamControls, nodeControls]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-80 md:h-96">
      {/* Background gradient glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at center, ${COLORS.purple}20 0%, transparent 60%)`,
        }}
      />

      <svg
        viewBox="0 0 500 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Glow filters */}
          <filter id="glow-pink" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Beam gradient */}
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={COLORS.purple} stopOpacity="0.8" />
            <stop offset="100%" stopColor={COLORS.cyan} stopOpacity="0.3" />
          </linearGradient>

          {/* Particle gradient */}
          <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={COLORS.white} />
            <stop offset="50%" stopColor={COLORS.pink} />
            <stop offset="100%" stopColor={COLORS.pink} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection Beams */}
        {NODES.map((node, i) => (
          <ConnectionBeam
            key={node.id}
            nodeAngle={node.angle}
            color={node.color}
            controls={beamControls}
            isLoaded={isLoaded}
            delay={i * 0.2}
          />
        ))}

        {/* Central Hub */}
        <CentralHub controls={hubControls} />

        {/* Orbiting Nodes */}
        {NODES.map((node, i) => (
          <OrbitingNode
            key={node.id}
            node={node}
            controls={nodeControls}
            isLoaded={isLoaded}
            index={i}
          />
        ))}
      </svg>

      {/* Labels (HTML overlay for better text rendering) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Center label */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <span className="text-xs md:text-sm font-mono text-purple-400/80 tracking-wider">
              SIPWIKI DATABASE
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CENTRAL HUB
// ============================================
function CentralHub({ controls }: { controls: ReturnType<typeof useAnimation> }) {
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={controls}
      style={{ originX: "250px", originY: "200px" }}
    >
      {/* Outer rotating ring */}
      <motion.circle
        cx="250"
        cy="200"
        r="55"
        fill="none"
        stroke={COLORS.purple}
        strokeWidth="1"
        strokeDasharray="8 4"
        opacity="0.4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ originX: "250px", originY: "200px" }}
      />

      {/* Middle pulsing ring */}
      <motion.circle
        cx="250"
        cy="200"
        r="45"
        fill="none"
        stroke={COLORS.cyan}
        strokeWidth="2"
        opacity="0.6"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        filter="url(#glow-purple)"
      />

      {/* Inner hexagon */}
      <motion.polygon
        points="250,165 280,182.5 280,217.5 250,235 220,217.5 220,182.5"
        fill={COLORS.bg}
        stroke={COLORS.purple}
        strokeWidth="2"
        filter="url(#glow-purple)"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ originX: "250px", originY: "200px" }}
      />

      {/* Inner glow circle */}
      <circle
        cx="250"
        cy="200"
        r="28"
        fill={`${COLORS.purple}15`}
      />

      {/* Center icon */}
      <g transform="translate(234, 184)">
        <FlaskConical
          size={32}
          color={COLORS.pink}
          strokeWidth={1.5}
        />
      </g>

      {/* Pulsing core */}
      <motion.circle
        cx="250"
        cy="200"
        r="8"
        fill={COLORS.pink}
        opacity="0.8"
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.4, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        filter="url(#glow-pink)"
      />
    </motion.g>
  );
}

// ============================================
// CONNECTION BEAM
// ============================================
function ConnectionBeam({
  nodeAngle,
  color,
  controls,
  isLoaded,
  delay,
}: {
  nodeAngle: number;
  color: string;
  controls: ReturnType<typeof useAnimation>;
  isLoaded: boolean;
  delay: number;
}) {
  const centerX = 250;
  const centerY = 200;
  const radius = 140;
  const angleRad = (nodeAngle * Math.PI) / 180;
  const endX = centerX + Math.cos(angleRad) * radius;
  const endY = centerY + Math.sin(angleRad) * radius;

  // Control point for curved beam
  const midRadius = radius * 0.6;
  const controlAngle = angleRad + 0.2;
  const ctrlX = centerX + Math.cos(controlAngle) * midRadius;
  const ctrlY = centerY + Math.sin(controlAngle) * midRadius;

  const pathD = `M ${centerX} ${centerY} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`;

  return (
    <g>
      {/* Beam glow (background) */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="4"
        opacity="0.15"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={controls}
        style={{ filter: "blur(4px)" }}
      />

      {/* Beam line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={controls}
        opacity="0.6"
      />

      {/* Traveling particles */}
      {isLoaded && (
        <>
          <TravelingParticle path={pathD} color={color} delay={delay} duration={2} />
          <TravelingParticle path={pathD} color={color} delay={delay + 1} duration={2} />
        </>
      )}
    </g>
  );
}

// ============================================
// TRAVELING PARTICLE
// ============================================
function TravelingParticle({
  path,
  color,
  delay,
  duration,
}: {
  path: string;
  color: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.circle
      r="4"
      fill={color}
      filter="url(#glow-strong)"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
        times: [0, 0.1, 0.9, 1],
      }}
    >
      <animateMotion
        dur={`${duration}s`}
        repeatCount="indefinite"
        begin={`${delay}s`}
        path={path}
      />
    </motion.circle>
  );
}

// ============================================
// ORBITING NODE
// ============================================
function OrbitingNode({
  node,
  controls,
  isLoaded,
  index,
}: {
  node: typeof NODES[0];
  controls: ReturnType<typeof useAnimation>;
  isLoaded: boolean;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const centerX = 250;
  const centerY = 200;
  const radius = 140;
  const angleRad = (node.angle * Math.PI) / 180;
  const x = centerX + Math.cos(angleRad) * radius;
  const y = centerY + Math.sin(angleRad) * radius;

  const Icon = node.icon;

  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={controls}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {/* Floating animation wrapper */}
      <motion.g
        animate={
          isLoaded && !isHovered
            ? {
                y: [0, -8, 0],
              }
            : { y: 0 }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
      >
        {/* Outer glow ring */}
        <motion.circle
          cx={x}
          cy={y}
          r="32"
          fill="none"
          stroke={node.color}
          strokeWidth="1"
          opacity={isHovered ? 0.8 : 0.3}
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{ originX: `${x}px`, originY: `${y}px` }}
        />

        {/* Node background */}
        <motion.circle
          cx={x}
          cy={y}
          r="26"
          fill={COLORS.bg}
          stroke={node.color}
          strokeWidth="2"
          animate={isHovered ? { filter: "url(#glow-strong)" } : {}}
          transition={{ duration: 0.3 }}
        />

        {/* Inner glow */}
        <circle
          cx={x}
          cy={y}
          r="22"
          fill={`${node.color}15`}
        />

        {/* Icon */}
        <g transform={`translate(${x - 12}, ${y - 12})`}>
          <Icon
            size={24}
            color={isHovered ? COLORS.white : node.color}
            strokeWidth={1.5}
          />
        </g>

        {/* Label (appears on hover) */}
        <motion.text
          x={x}
          y={y + 50}
          textAnchor="middle"
          fill={node.color}
          fontSize="10"
          fontFamily="monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {node.label.toUpperCase()}
        </motion.text>
      </motion.g>

      {/* Connection dot at node */}
      <motion.circle
        cx={x}
        cy={y}
        r="4"
        fill={node.color}
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.5, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      />
    </motion.g>
  );
}

export default HeroAnimation;
