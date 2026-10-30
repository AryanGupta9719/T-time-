import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { TeddyBear } from '../illustrations/TeddyBear';
import { MendingHeartCharacters, RomanticMirror } from '../illustrations/StoryIllustrations';

export interface ApologyCardData {
  id: number;
  closedTitle: string;
  icon: string;
  tagline: string;
  headline: string;
  body: string;
  animationType: 'bear-offering-heart' | 'mending-heart' | 'mirror' | 'cuddle-blanket';
}

interface ApologyCardProps {
  data: ApologyCardData;
  isOpen: boolean;
  onToggle: () => void;
}

export const ApologyCard: React.FC<ApologyCardProps> = ({ data, isOpen, onToggle }) => {
  const handleClick = () => {
    if (!isOpen) {
      // Trigger a mini heart release
      confetti({
        particleCount: 15,
        spread: 45,
        origin: { y: 0.5 },
        colors: ['#FF5C93', '#FF8FB8', '#E75480'],
        shapes: ['circle'],
        scalar: 0.8,
      });
      onToggle();
    }
  };

  return (
    <div className="w-full mb-4 perspective-1000">
      <motion.div
        layout
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`w-full rounded-3xl transition-all duration-300 ${
          isOpen
            ? 'bg-white/95 border-2 border-[#FF8FB8] shadow-lg shadow-[#FF8FB8]/20 p-5 sm:p-6'
            : 'bg-gradient-to-r from-white/90 via-[#FFF5FA] to-white/90 border border-[#FFD6E7] shadow-sm hover:shadow-md hover:border-[#FF8FB8] p-4 sm:p-5 cursor-pointer'
        }`}
        onClick={handleClick}
      >
        {/* Closed View (Sealed Pink Letter) */}
        {!isOpen && (
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFD6E7] to-[#FFF0F5] border border-[#FF8FB8]/50 flex items-center justify-center text-xl shadow-xs shrink-0">
                {data.icon}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E75480]">
                  {data.tagline}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#75445B] tracking-tight">
                  {data.closedTitle}
                </h3>
              </div>
            </div>

            {/* Heart Wax Seal */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5C93] via-[#E75480] to-[#C93365] flex items-center justify-center shadow-md border-2 border-white/80 shrink-0 text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          </div>
        )}

        {/* Unfolded View (Letter Open) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="text-left"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#FFD6E7] pb-3 mb-3">
                <span className="text-xs font-bold text-[#E75480] flex items-center gap-1.5">
                  <span>💌</span>
                  <span>{data.tagline}</span>
                </span>
                <span className="text-[11px] font-semibold text-[#8B5970] bg-[#FFF0F5] px-2.5 py-0.5 rounded-full border border-[#FFD6E7]">
                  Unfolded with love 💗
                </span>
              </div>

              {/* Unfolded Message */}
              <h4 className="text-lg sm:text-xl font-extrabold text-[#75445B] mb-2 leading-snug">
                {data.headline}
              </h4>

              <p className="text-sm sm:text-base text-[#75445B]/90 font-medium leading-relaxed mb-3">
                {data.body}
              </p>

              {/* Custom SVG Illustration for this Card */}
              <div className="mt-2 pt-2 border-t border-[#FFF0F5] flex justify-center">
                {data.animationType === 'bear-offering-heart' && (
                  <TeddyBear pose="offering-heart-both-paws" size={160} />
                )}
                {data.animationType === 'mending-heart' && <MendingHeartCharacters />}
                {data.animationType === 'mirror' && <RomanticMirror />}
                {data.animationType === 'cuddle-blanket' && (
                  <TeddyBear pose="cuddle" size={180} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
