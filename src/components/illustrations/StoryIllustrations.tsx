import React from 'react';
import { motion } from 'motion/react';

// Card 2: Two cute cartoon characters sitting apart, broken heart becomes whole again
export const MendingHeartCharacters: React.FC = () => {
  return (
    <div className="relative w-full h-36 flex items-center justify-center overflow-hidden my-2">
      {/* Soft warm floor shadow */}
      <div className="absolute bottom-4 w-48 h-4 bg-[#FF8FB8]/20 rounded-full blur-sm" />

      {/* Left Character (Gentle Brown Bear) */}
      <motion.div
        className="relative z-10"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-sm">
          {/* Ears */}
          <circle cx="30" cy="25" r="12" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="2" />
          <circle cx="30" cy="25" r="6" fill="#FCE0CE" />
          <circle cx="70" cy="25" r="12" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="2" />
          <circle cx="70" cy="25" r="6" fill="#FCE0CE" />
          {/* Head & Body */}
          <circle cx="50" cy="45" r="26" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="2" />
          <ellipse cx="50" cy="74" rx="22" ry="18" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="2" />
          {/* Face */}
          <ellipse cx="50" cy="52" rx="11" ry="8" fill="#FCE0CE" />
          <circle cx="50" cy="49" r="2.5" fill="#583120" />
          {/* Shy caring eyes looking toward partner */}
          <ellipse cx="44" cy="44" rx="3" ry="3.5" fill="#3D1D11" />
          <circle cx="43" cy="43" r="1.2" fill="#FFF" />
          <ellipse cx="60" cy="44" rx="3" ry="3.5" fill="#3D1D11" />
          <circle cx="59" cy="43" r="1.2" fill="#FFF" />
          {/* Blush */}
          <ellipse cx="38" cy="52" rx="5" ry="3" fill="#FF8FB8" opacity="0.8" />
          <ellipse cx="62" cy="52" rx="5" ry="3" fill="#FF8FB8" opacity="0.8" />
          {/* Arms reaching softly */}
          <circle cx="68" cy="68" r="7" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Center Heart: animates from cracked/broken to complete, glowing and healing */}
      <div className="relative z-20 mx-1 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.95, 1.15, 1.05] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-[#FF8FB8]/40 rounded-full blur-md" />

          {/* Golden Kintsugi / Healing Heart SVG */}
          <svg viewBox="0 0 60 60" className="w-14 h-14 relative z-10 filter drop-shadow">
            {/* The Heart */}
            <path
              d="M30 52 C15 38, 5 28, 12 17 C18 8, 26 12, 30 18 C34 12, 42 8, 48 17 C55 28, 45 38, 30 52 Z"
              fill="#FF5C93"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            {/* Healing seam with golden/pink sparkles */}
            <motion.path
              d="M30 18 Q27 26 33 34 T30 50"
              stroke="#FFF"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
        {/* Soft healing label */}
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[11px] font-semibold text-[#E75480] bg-white/80 px-2 py-0.5 rounded-full shadow-xs mt-1"
        >
          Mending together 💗
        </motion.span>
      </div>

      {/* Right Character (Gentle Cream Bunny / Bear) */}
      <motion.div
        className="relative z-10"
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <svg viewBox="0 0 100 100" className="w-20 h-20 filter drop-shadow-sm">
          {/* Bunny/Bear Ears */}
          <ellipse cx="34" cy="20" rx="9" ry="16" fill="#FCE0CE" stroke="#CB7F4E" strokeWidth="2" />
          <ellipse cx="34" cy="20" rx="5" ry="10" fill="#FFD6E7" />
          <ellipse cx="66" cy="20" rx="9" ry="16" fill="#FCE0CE" stroke="#CB7F4E" strokeWidth="2" />
          <ellipse cx="66" cy="20" rx="5" ry="10" fill="#FFD6E7" />
          {/* Head & Body */}
          <circle cx="50" cy="46" r="25" fill="#FDF3EB" stroke="#CB7F4E" strokeWidth="2" />
          <ellipse cx="50" cy="74" rx="20" ry="17" fill="#FDF3EB" stroke="#CB7F4E" strokeWidth="2" />
          {/* Face */}
          <ellipse cx="50" cy="52" rx="10" ry="7" fill="#FFF" />
          <circle cx="50" cy="49" r="2.5" fill="#CB7F4E" />
          {/* Sweet eyes */}
          <ellipse cx="42" cy="44" rx="3" ry="3.5" fill="#3D1D11" />
          <circle cx="43" cy="43" r="1.2" fill="#FFF" />
          <ellipse cx="58" cy="44" rx="3" ry="3.5" fill="#3D1D11" />
          <circle cx="59" cy="43" r="1.2" fill="#FFF" />
          {/* Blush */}
          <ellipse cx="36" cy="52" rx="5" ry="3" fill="#FF8FB8" opacity="0.8" />
          <ellipse cx="64" cy="52" rx="5" ry="3" fill="#FF8FB8" opacity="0.8" />
          {/* Paw reaching */}
          <circle cx="32" cy="68" r="7" fill="#FDF3EB" stroke="#CB7F4E" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </div>
  );
};

// Card 3: Pink Vanity Mirror with Glowing Heart Reflection
export const RomanticMirror: React.FC = () => {
  return (
    <div className="relative w-full h-36 flex items-center justify-center overflow-hidden my-2">
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex items-center justify-center"
      >
        {/* Glow halo */}
        <div className="absolute w-28 h-36 bg-[#FF8FB8]/30 rounded-full blur-md" />

        <svg viewBox="0 0 120 150" className="w-28 h-36 filter drop-shadow-md">
          {/* Mirror Stand & Handle */}
          <path d="M60 120 L60 144" stroke="#E75480" strokeWidth="8" strokeLinecap="round" />
          <ellipse cx="60" cy="144" rx="18" ry="4" fill="#E75480" />

          {/* Mirror Ornate Frame */}
          <ellipse cx="60" cy="65" rx="44" ry="52" fill="#FFD6E7" stroke="#E75480" strokeWidth="4" />
          
          {/* Mirror Glass (Shiny Pastel Blue-Pink Gradient) */}
          <ellipse cx="60" cy="65" rx="37" ry="45" fill="#FFF5FA" />
          
          {/* Glass reflection streak */}
          <path d="M42 35 Q55 30 75 45" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />

          {/* Crown Bow on top of mirror */}
          <g>
            <circle cx="60" cy="14" r="5" fill="#E75480" />
            <ellipse cx="50" cy="13" rx="8" ry="5" fill="#FF8FB8" stroke="#E75480" strokeWidth="1.5" />
            <ellipse cx="70" cy="13" rx="8" ry="5" fill="#FF8FB8" stroke="#E75480" strokeWidth="1.5" />
          </g>

          {/* Tiny glowing heart reflection in center */}
          <g>
            <path
              d="M60 76 C52 68, 46 62, 50 56 C53 51, 58 53, 60 56 C62 53, 67 51, 70 56 C74 62, 68 68, 60 76 Z"
              fill="#FF5C93"
            />
            {/* Smile under the heart */}
            <path d="M56 82 Q60 85 64 82" stroke="#E75480" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        </svg>

        {/* Floating Sparkles around mirror */}
        <motion.span
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-2 text-base"
        >
          ✨
        </motion.span>
        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 0.6 }}
          className="absolute bottom-6 -left-3 text-sm"
        >
          💖
        </motion.span>
      </motion.div>
    </div>
  );
};

// Heart Wax Seal for Unopened Letters
export const HeartSeal: React.FC<{ isOpen?: boolean }> = ({ isOpen }) => {
  return (
    <motion.div
      animate={isOpen ? { scale: 0.8, opacity: 0 } : { scale: [1, 1.08, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF5C93] via-[#E75480] to-[#C93365] flex items-center justify-center shadow-md border-2 border-white/60 cursor-pointer"
    >
      <svg viewBox="0 0 24 24" fill="#FFFFFF" className="w-6 h-6 drop-shadow-xs">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  );
};

// Huge joyful hug animation for final reward & acceptance
export const HugCelebrationAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-52 flex items-center justify-center overflow-hidden my-3">
      {/* Background radial glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-64 h-64 bg-gradient-to-r from-[#FFD6E7] to-[#FF8FB8]/40 rounded-full blur-xl pointer-events-none"
      />

      {/* Floating Kisses & Hearts */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: [-10, -70 - i * 12],
            x: [(i % 2 === 0 ? -1 : 1) * (15 + i * 10), (i % 2 === 0 ? -1 : 1) * (25 + i * 15)],
            opacity: [0, 1, 0],
            scale: [0.6, 1.2, 0.9],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.35,
            ease: 'easeOut',
          }}
          className="absolute z-30 text-xl pointer-events-none"
        >
          {i % 2 === 0 ? '💋' : '💗'}
        </motion.div>
      ))}

      {/* Two Characters Hugging tightly SVG */}
      <motion.div
        animate={{ scale: [0.96, 1.03, 0.96], rotate: [-1, 1, -1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-56 h-48 flex items-center justify-center"
      >
        <svg viewBox="0 0 220 180" className="w-full h-full filter drop-shadow-md">
          {/* Floor Shadow */}
          <ellipse cx="110" cy="165" rx="75" ry="12" fill="#FF8FB8" opacity="0.3" />

          {/* Left Bear Body */}
          <ellipse cx="85" cy="120" rx="36" ry="34" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="2.5" />
          
          {/* Right Bunny/Bear Body */}
          <ellipse cx="135" cy="120" rx="36" ry="34" fill="#FCE0CE" stroke="#CB7F4E" strokeWidth="2.5" />

          {/* Left Bear Head leaning into hug */}
          <circle cx="80" cy="75" r="32" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="2.5" />
          <circle cx="58" cy="52" r="14" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="2" />
          <circle cx="58" cy="52" r="7" fill="#FCE0CE" />
          <circle cx="98" cy="50" r="12" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="2" />

          {/* Right Character Head leaning back into cheek */}
          <circle cx="140" cy="75" r="32" fill="#FCE0CE" stroke="#CB7F4E" strokeWidth="2.5" />
          <ellipse cx="160" cy="46" rx="9" ry="17" fill="#FCE0CE" stroke="#CB7F4E" strokeWidth="2" />
          <ellipse cx="160" cy="46" rx="5" ry="11" fill="#FFD6E7" />

          {/* Faces (Eyes closed in blissful cuddle) */}
          <path d="M72 74 Q77 69 82 74" stroke="#3D1D11" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M136 74 Q141 69 146 74" stroke="#3D1D11" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Deep rosy blush on squished cheeks */}
          <ellipse cx="68" cy="83" rx="8" ry="5" fill="#FF5C93" opacity="0.85" />
          <ellipse cx="148" cy="83" rx="8" ry="5" fill="#FF5C93" opacity="0.85" />

          {/* Big Arms Wrapped Around Each Other (The Big Hug!) */}
          {/* Left bear's arm wrapped around right bear */}
          <path
            d="M80 105 Q120 95 155 115"
            stroke="#E8A57A"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M80 105 Q120 95 155 115"
            stroke="#CB7F4E"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="158" cy="116" r="9" fill="#E8A57A" stroke="#CB7F4E" strokeWidth="1.5" />

          {/* Right bear's arm wrapped around left bear */}
          <path
            d="M140 108 Q100 115 65 105"
            stroke="#FCE0CE"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="62" cy="104" r="8.5" fill="#FCE0CE" stroke="#CB7F4E" strokeWidth="1.5" />

          {/* Little kiss print mark on cheek */}
          <path
            d="M92 78 C94 75, 98 75, 99 77 C100 75, 104 75, 106 78 C104 82, 99 84, 99 84 C99 84, 94 82, 92 78 Z"
            fill="#FF5C93"
            opacity="0.9"
          />
        </svg>
      </motion.div>
    </div>
  );
};
