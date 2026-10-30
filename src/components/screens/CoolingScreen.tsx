import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TeddyBear } from '../illustrations/TeddyBear';
import { NavigationButton } from '../NavigationButton';

interface CoolingScreenProps {
  onContinue: () => void;
}

export const CoolingScreen: React.FC<CoolingScreenProps> = ({ onContinue }) => {
  const [breathePhase, setBreathePhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const timer = setInterval(() => {
      setBreathePhase((prev) => (prev === 'in' ? 'out' : 'in'));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto flex flex-col items-center text-center px-4 py-6"
    >
      {/* Breeze and Cloud Decor */}
      <div className="relative w-full flex items-center justify-center">
        {/* Animated Breeze stream indicators */}
        <div className="absolute top-8 left-4 text-xs font-semibold text-[#FF8FB8] flex items-center gap-1 opacity-75 animate-breeze">
          <span>🍃</span>
          <span>Cool breeze</span>
        </div>
        <div className="absolute top-12 right-6 text-xs font-semibold text-[#FF8FB8] flex items-center gap-1 opacity-75 animate-breeze" style={{ animationDelay: '1s' }}>
          <span>🌸</span>
          <span>Soft calm</span>
        </div>

        {/* Teddy holding fan & offering heart-shaped pillow */}
        <TeddyBear pose="cooling" size={220} />
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-lg shadow-[#FF8FB8]/20 border border-[#FFD6E7] w-full"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#75445B] mb-2 tracking-tight">
          Okay, JAANI... <span className="inline-block animate-heartbeat">🥺💗</span>
        </h2>

        <p className="text-base text-[#E75480] font-bold mb-1">
          Let&apos;s get that pretty head of yours on a cooler side first.
        </p>

        <p className="text-sm text-[#75445B] font-medium mb-4">
          Take a deep breath, okay?
        </p>

        {/* Interactive Breathing Bubble */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-b from-[#FFF0F5] to-white border border-[#FFD6E7] flex flex-col items-center">
          <motion.div
            animate={{
              scale: breathePhase === 'in' ? 1.25 : 0.9,
              backgroundColor: breathePhase === 'in' ? '#FFD6E7' : '#FFF0F5',
            }}
            transition={{ duration: 3.5, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-full border-2 border-[#FF8FB8] flex items-center justify-center shadow-inner mb-2 text-xl"
          >
            {breathePhase === 'in' ? '🌬️' : '🌸'}
          </motion.div>
          <span className="text-xs font-bold text-[#E75480] tracking-wider uppercase">
            {breathePhase === 'in' ? 'Breathe in slowly...' : 'Breathe out gently...'}
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#75445B] font-medium leading-relaxed mb-6">
          Main yahin hoon. Let&apos;s talk, one little heart at a time. 🧸💗
        </p>

        <NavigationButton
          onClick={onContinue}
          variant="primary"
          size="lg"
          className="w-full sm:w-auto animate-pulse-glow"
        >
          OKAY, TELL ME WHY YOU&apos;RE SORRY 💌
        </NavigationButton>
      </motion.div>

      <p className="text-xs text-[#9B6B80] mt-4 font-medium opacity-80">
        No rush, Taanyaaa. Whenever you&apos;re ready. 💗
      </p>
    </motion.div>
  );
};
