import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { TeddyBear } from '../illustrations/TeddyBear';
import { NavigationButton } from '../NavigationButton';

interface SorryFinaleProps {
  onNext: () => void;
}

export const SorryFinale: React.FC<SorryFinaleProps> = ({ onNext }) => {
  useEffect(() => {
    // Beautiful romantic shower of confetti
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#FF5C93', '#FF8FB8', '#E75480', '#FFA4C8', '#FFF'],
      shapes: ['circle'],
      scalar: 1.1,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto flex flex-col items-center text-center px-4 py-6"
    >
      {/* Teddy Bear holding big "SORRY" heart */}
      <div className="relative mb-3">
        <TeddyBear pose="sorry-sign" size={230} />
      </div>

      {/* Romantic apology parchment */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-xl shadow-[#FF8FB8]/25 border-2 border-[#FFD6E7] w-full"
      >
        <h2 className="text-2xl sm:text-3xl font-black text-[#E75480] tracking-tight mb-2">
          TAANYAAAA... <span className="inline-block animate-heartbeat">🥺💗</span>
        </h2>

        <p className="text-lg sm:text-xl font-bold text-[#75445B] mb-4">
          I&apos;m really sorry, JAANI.
        </p>

        <div className="space-y-3 text-sm sm:text-base text-[#75445B] font-medium leading-relaxed mb-6 text-left sm:text-center">
          <p>
            I may not always get everything right, but I don&apos;t want to hurt you. You matter to me, and I don&apos;t want one unwanted conversation to take away the softness between us.
          </p>
          <p className="text-[#8B5970] italic">
            Your feelings matter, too. Take your time, okay?
          </p>
          <p className="font-semibold text-[#E75480]">
            I just wanted to make you smile a little. 🧸💕
          </p>
        </div>

        {/* Large Glowing Button */}
        <NavigationButton
          onClick={onNext}
          variant="primary"
          size="xl"
          className="w-full sm:w-auto animate-pulse-glow"
        >
          ONE LAST QUESTION... 👉👈
        </NavigationButton>
      </motion.div>
    </motion.div>
  );
};
