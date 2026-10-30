import React from 'react';
import { motion } from 'motion/react';
import { TeddyBear } from '../illustrations/TeddyBear';
import { NavigationButton } from '../NavigationButton';

interface OpeningScreenProps {
  onAnswerYes: () => void;
  onAnswerNo: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({
  onAnswerYes,
  onAnswerNo,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto flex flex-col items-center text-center px-4 py-6"
    >
      {/* Decorative Cloud & Heart Badge */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#FFD6E7] shadow-xs text-xs font-semibold text-[#E75480] mb-4"
      >
        <span>🧸</span>
        <span>A special message for Taanyaaa</span>
        <span>💗</span>
      </motion.div>

      {/* Main Teddy Bear Illustration */}
      <div className="relative mb-4">
        {/* Soft pulsing heart badge floating behind */}
        <div className="absolute -top-3 -right-3 text-2xl animate-soft-float">
          ✨
        </div>
        <div className="absolute -bottom-1 -left-3 text-2xl animate-soft-float" style={{ animationDelay: '1.2s' }}>
          🌸
        </div>
        <TeddyBear pose="holding-heart" size={210} />
      </div>

      {/* Romantic Greeting Cards & Question */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-lg shadow-[#FF8FB8]/15 border border-[#FFD6E7] w-full"
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#75445B] tracking-tight mb-2">
          Hey Taanyaaa... <span className="inline-block animate-heartbeat">🥺💗</span>
        </h1>
        
        <p className="text-[#8B5970] text-base sm:text-lg font-medium mb-3">
          Ek chhota sa sawaal poochun?
        </p>

        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#FF8FB8] to-transparent my-3" />

        <p className="text-xl sm:text-2xl font-bold text-[#E75480] mb-6">
          Are you upset with me?
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full sm:w-auto"
          >
            <NavigationButton
              onClick={onAnswerYes}
              variant="secondary"
              className="w-full hover:border-[#FF8FB8] hover:text-[#E75480]"
            >
              YES, I AM UPSET 😤
            </NavigationButton>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="w-full sm:w-auto animate-pulse-glow rounded-full"
          >
            <NavigationButton
              onClick={onAnswerNo}
              variant="primary"
              className="w-full"
            >
              NO, I&apos;M NOT UPSET 💗
            </NavigationButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle reassurance note */}
      <p className="text-xs text-[#9B6B80] mt-4 font-medium opacity-80">
        Tap with honesty, JAANI... your feelings matter the most 🧸
      </p>
    </motion.div>
  );
};
