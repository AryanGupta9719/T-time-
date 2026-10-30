import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeartParticle {
  id: number;
  x: number; // percentage or px
  y?: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  rotation: number;
  type: 'heart' | 'sparkle' | 'star';
}

interface TapHeart {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const COLORS = ['#FF8FB8', '#E75480', '#FFD6E7', '#FFA4C8', '#FF6B9B'];
const TAP_EMOJIS = ['💗', '🧸', '✨', '💖', '🌸', '💋', '💕'];

export const FloatingHearts: React.FC = () => {
  const [backgroundHearts, setBackgroundHearts] = useState<HeartParticle[]>([]);
  const [tapHearts, setTapHearts] = useState<TapHeart[]>([]);

  useEffect(() => {
    // Generate initial ambient floating hearts
    const items: HeartParticle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 94 + 3,
      size: Math.floor(Math.random() * 16) + 12,
      duration: Math.random() * 7 + 8,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.45 + 0.25,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 40 - 20,
      type: i % 4 === 0 ? 'sparkle' : i % 7 === 0 ? 'star' : 'heart',
    }));
    setBackgroundHearts(items);
  }, []);

  const handleGlobalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Spawn a lovely interactive burst when tapped anywhere
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newTap: TapHeart = {
      id: Date.now() + Math.random(),
      x,
      y,
      emoji: TAP_EMOJIS[Math.floor(Math.random() * TAP_EMOJIS.length)],
    };

    setTapHearts((prev) => [...prev.slice(-12), newTap]);

    setTimeout(() => {
      setTapHearts((prev) => prev.filter((item) => item.id !== newTap.id));
    }, 1200);
  };

  return (
    <div
      onClick={handleGlobalClick}
      className="fixed inset-0 pointer-events-auto overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Soft romantic ambient gradient meshes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD6E7]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF8FB8]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/30 rounded-full blur-2xl pointer-events-none" />

      {/* Floating particles */}
      {backgroundHearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{
            y: '105vh',
            x: `${h.x}vw`,
            opacity: 0,
            scale: 0.6,
            rotate: h.rotation,
          }}
          animate={{
            y: '-10vh',
            opacity: [0, h.opacity, h.opacity, 0],
            scale: [0.7, 1, 1, 0.8],
            rotate: [h.rotation - 15, h.rotation + 15],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute pointer-events-none will-change-transform"
          style={{ width: h.size, height: h.size }}
        >
          {h.type === 'heart' ? (
            <svg viewBox="0 0 24 24" fill={h.color} className="w-full h-full drop-shadow-sm">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : h.type === 'sparkle' ? (
            <svg viewBox="0 0 24 24" fill={h.color} className="w-full h-full drop-shadow-sm opacity-80">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          ) : (
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF8FB8] opacity-60 shadow-sm" />
          )}
        </motion.div>
      ))}

      {/* Interactive tap feedback hearts */}
      <AnimatePresence>
        {tapHearts.map((tap) => (
          <motion.div
            key={tap.id}
            initial={{ opacity: 1, scale: 0.4, x: tap.x - 12, y: tap.y - 12 }}
            animate={{
              opacity: 0,
              scale: [0.6, 1.4, 1.6],
              y: tap.y - 75,
              x: tap.x - 12 + (Math.random() * 30 - 15),
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute pointer-events-none text-2xl z-50 filter drop-shadow"
          >
            {tap.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
