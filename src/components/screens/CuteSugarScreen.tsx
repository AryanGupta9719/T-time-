import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { TeddyBear } from '../illustrations/TeddyBear';
import { HugCelebrationAnimation } from '../illustrations/StoryIllustrations';
import { NavigationButton } from '../NavigationButton';

interface CuteSugarScreenProps {
  onRestart: () => void;
}

export const CuteSugarScreen: React.FC<CuteSugarScreenProps> = ({ onRestart }) => {
  const [subState, setSubState] = useState<'ask' | 'shy' | 'hug'>('ask');

  const triggerHeartExplosion = () => {
    // Canvas confetti with romantic pink & red shapes
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF5C93', '#FF8FB8', '#E75480', '#FFD6E7', '#FFA4C8'],
      shapes: ['circle'],
      scalar: 1.2,
    });
  };

  const handleYes = () => {
    triggerHeartExplosion();
    setSubState('hug');
  };

  const handleAskAgain = () => {
    setSubState('shy');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-md mx-auto flex flex-col items-center text-center px-4 py-6"
    >
      <AnimatePresence mode="wait">
        {subState === 'ask' && (
          <motion.div
            key="ask"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full flex flex-col items-center"
          >
            {/* Teddy pose */}
            <div className="relative mb-3">
              <TeddyBear pose="holding-sugar-sign" size={200} />
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg shadow-[#FF8FB8]/20 border border-[#FFD6E7] w-full">
              <h2 className="text-2xl sm:text-3xl font-black text-[#E75480] mb-2 tracking-tight">
                ACCHAAA, JAANI! 🥹💗
              </h2>
              <p className="text-base text-[#75445B] font-semibold mb-3">
                Toh phir ek chhota sa reward mil sakta hai?
              </p>

              <div className="bg-[#FFF0F5] border border-[#FFD6E7] rounded-2xl p-4 my-4 text-[#75445B] font-medium text-sm leading-relaxed">
                Sending you unlimited virtual sugar, cuddles &amp; forehead kisses! 💋🧸
              </div>

              <p className="text-lg font-bold text-[#E75480] mb-5">
                Can I get some sugar too? 🥺👉👈
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <NavigationButton
                  onClick={handleYes}
                  variant="primary"
                  className="w-full sm:w-auto animate-pulse-glow"
                >
                  YES, COME HERE 💋
                </NavigationButton>
                <NavigationButton
                  onClick={handleAskAgain}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  EK AUR BAAR POOCHHO 🙈
                </NavigationButton>
              </div>
            </div>
          </motion.div>
        )}

        {subState === 'shy' && (
          <motion.div
            key="shy"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full flex flex-col items-center"
          >
            <div className="relative mb-3">
              <TeddyBear pose="blushing" size={210} />
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg shadow-[#FF8FB8]/20 border border-[#FFD6E7] w-full">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl sm:text-3xl font-extrabold text-[#E75480] mb-3"
              >
                Pleaseeeee, JAANI... 🥺👉👈
              </motion.div>
              <p className="text-base text-[#75445B] mb-5 font-medium">
                Dil se pooch raha hoon... Can I get a little sugar now, Taanyaaa? 💗
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <NavigationButton
                  onClick={handleYes}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  YES, COME HERE 💋
                </NavigationButton>
                <NavigationButton
                  onClick={() => setSubState('ask')}
                  variant="soft"
                  className="w-full sm:w-auto text-xs"
                >
                  Let me ask once more 🥺
                </NavigationButton>
              </div>
            </div>
          </motion.div>
        )}

        {subState === 'hug' && (
          <motion.div
            key="hug"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full flex flex-col items-center"
          >
            {/* The Hug Animation */}
            <HugCelebrationAnimation />

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl shadow-[#FF8FB8]/25 border border-[#FFD6E7] w-full">
              <h2 className="text-2xl sm:text-3xl font-black text-[#E75480] mb-2 tracking-tight">
                YAYYYYY, JAANI! 🥹💗
              </h2>
              <p className="text-base sm:text-lg font-bold text-[#75445B] mb-2">
                Coming to steal the biggest cuddle ever! 🧸💋
              </p>
              <p className="text-xs text-[#8B5970] mb-6 font-medium">
                Forever your favorite cuddly bear, Taanyaaa.
              </p>

              <NavigationButton
                onClick={onRestart}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                EK AUR BAAR? 🥺
              </NavigationButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
