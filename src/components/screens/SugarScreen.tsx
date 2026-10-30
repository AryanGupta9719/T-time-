import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { TeddyBear } from '../illustrations/TeddyBear';
import { HugCelebrationAnimation } from '../illustrations/StoryIllustrations';
import { NavigationButton } from '../NavigationButton';

interface SugarScreenProps {
  onRestart: () => void;
}

const AFFECTION_MESSAGES = [
  {
    title: 'HEHEHE, YAYYYYY, JAANI! 🥹💗',
    text: "Sending you the warmest hug and the sweetest kiss! 💋 You're my favourite little soft spot, Taanyaaa. 🧸💕",
    extra: 'Heart cuddle meter: 10,000% 💖',
  },
  {
    title: 'EXTRA CUDDLES DELIVERED! 🧸💋',
    text: "One big warm bear hug wrapped especially for Taanyaaa! You'll always have my entire heart, JAANI. 💗",
    extra: 'Forehead kisses delivered: Infinite! ✨',
  },
  {
    title: 'MY SWEETEST TAANYAAA! 🌸🥺',
    text: "Your smile is the brightest thing ever. Never letting an argument steal this softness between us, JAANI. 💋",
    extra: 'Cozy blanket warmth unlocked! 🧸',
  },
  {
    title: 'STOLEN ANOTHER KISS! 🙈💋',
    text: "Hehehe, thank you JAANI! Still looking at you with the softest eyes in the world, Taanyaaa. 💗🧸",
    extra: 'Forever your safe cuddly person 🌸',
  },
];

export const SugarScreen: React.FC<SugarScreenProps> = ({ onRestart }) => {
  const [mode, setMode] = useState<'question' | 'accepted' | 'thinking'>('question');
  const [quoteIndex, setQuoteIndex] = useState(0);

  const triggerCelebration = () => {
    confetti({
      particleCount: 75,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FF5C93', '#FF8FB8', '#E75480', '#FFA4C8', '#FFF'],
      shapes: ['circle'],
      scalar: 1.25,
    });
  };

  const handleYes = () => {
    triggerCelebration();
    setMode('accepted');
  };

  const handleAgain = () => {
    triggerCelebration();
    setQuoteIndex((prev) => (prev + 1) % AFFECTION_MESSAGES.length);
  };

  const currentMessage = AFFECTION_MESSAGES[quoteIndex];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto flex flex-col items-center text-center px-4 py-6"
    >
      <AnimatePresence mode="wait">
        {mode === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full flex flex-col items-center"
          >
            {/* Two adorable teddy bears cuddled under blanket with sign */}
            <div className="relative mb-2">
              <TeddyBear pose="cuddle" size={230} />
              <div className="mt-1 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#FF8FB8] text-xs font-bold text-[#E75480] shadow-sm animate-soft-float">
                  <span>Sign:</span> &ldquo;Can I get sugar? 🥺💋&rdquo;
                </span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-xl shadow-[#FF8FB8]/20 border border-[#FFD6E7] w-full mt-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#75445B] tracking-tight mb-2">
                JAANI, can I get a little sugar? 👉👈
              </h2>
              <p className="text-base sm:text-lg font-bold text-[#E75480] mb-6">
                Just one tiny kiss... and maybe a cuddle? 🥹💗
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <NavigationButton
                  onClick={handleYes}
                  variant="primary"
                  className="w-full sm:w-auto animate-pulse-glow"
                >
                  YESSS, COME HERE 💋
                </NavigationButton>
                <NavigationButton
                  onClick={() => setMode('thinking')}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  HMM, LET ME THINK 🙈
                </NavigationButton>
              </div>
            </div>
          </motion.div>
        )}

        {mode === 'thinking' && (
          <motion.div
            key="thinking"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full flex flex-col items-center"
          >
            {/* Teddy blushing and looking shy with paws together */}
            <div className="relative mb-3">
              <TeddyBear pose="blushing" size={220} />
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-lg shadow-[#FF8FB8]/20 border border-[#FFD6E7] w-full">
              <h3 className="text-2xl font-black text-[#E75480] mb-2">
                Okayyy, JAANI, I&apos;ll wait. 🙈💗
              </h3>
              <p className="text-base text-[#75445B] font-medium leading-relaxed mb-6">
                No pressure, Taanyaaa. I&apos;ll be right here with my tiny heart. 🧸
              </p>

              <NavigationButton
                onClick={() => setMode('question')}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                ASK ME AGAIN LATER 💗
              </NavigationButton>
            </div>
          </motion.div>
        )}

        {mode === 'accepted' && (
          <motion.div
            key="accepted"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full flex flex-col items-center"
          >
            {/* Big joyful romantic hug animation */}
            <HugCelebrationAnimation />

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-xl shadow-[#FF8FB8]/30 border border-[#FFD6E7] w-full">
              <h2 className="text-2xl sm:text-3xl font-black text-[#E75480] tracking-tight mb-2">
                {currentMessage.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#75445B] leading-relaxed mb-3">
                {currentMessage.text}
              </p>

              <div className="inline-block bg-[#FFF0F5] border border-[#FFD6E7] rounded-full px-3 py-1 text-xs font-bold text-[#E75480] mb-6">
                {currentMessage.extra}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <NavigationButton
                  onClick={handleAgain}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  AGAIN? 🥺
                </NavigationButton>
                <NavigationButton
                  onClick={onRestart}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  BACK TO THE BEGINNING 💗
                </NavigationButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
