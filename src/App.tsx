/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FloatingHearts } from './components/FloatingHearts';
import { OpeningScreen } from './components/screens/OpeningScreen';
import { CuteSugarScreen } from './components/screens/CuteSugarScreen';
import { CoolingScreen } from './components/screens/CoolingScreen';
import { ApologyScreen } from './components/screens/ApologyScreen';
import { SorryFinale } from './components/screens/SorryFinale';
import { SugarScreen } from './components/screens/SugarScreen';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';

type Screen = 'opening' | 'cute-sugar' | 'cooling' | 'apology' | 'sorry-finale' | 'sugar-final';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('opening');

  const goToOpening = () => setCurrentScreen('opening');
  const goToCuteSugar = () => setCurrentScreen('cute-sugar');
  const goToCooling = () => setCurrentScreen('cooling');
  const goToApology = () => setCurrentScreen('apology');
  const goToSorryFinale = () => setCurrentScreen('sorry-finale');
  const goToSugarFinal = () => setCurrentScreen('sugar-final');

  return (
    <div className="relative min-h-screen w-full bg-[#FFF0F5] text-[#75445B] flex flex-col justify-between overflow-x-hidden select-none">
      {/* Background Floating Hearts Particle System */}
      <FloatingHearts />

      {/* Romantic Top Header */}
      <header className="relative z-20 w-full max-w-4xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <button
          onClick={goToOpening}
          className="flex items-center gap-2 group cursor-pointer text-left outline-none"
          title="Return to start"
        >
          <div className="w-9 h-9 rounded-full bg-white/90 border border-[#FFD6E7] shadow-xs flex items-center justify-center text-[#E75480] group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-[#FF8FB8]" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-[#75445B] tracking-tight flex items-center gap-1">
              <span>A Little Sorry, JAANI</span>
              <span className="text-xs">💗🧸</span>
            </div>
            <div className="text-[10px] font-semibold text-[#E75480]/80">
              For Taanyaaa
            </div>
          </div>
        </button>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          {currentScreen !== 'opening' && (
            <button
              onClick={goToOpening}
              className="px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-xs font-bold text-[#75445B] border border-[#FFD6E7] shadow-xs hover:shadow flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#E75480]" />
              <span className="hidden sm:inline">Start Over</span>
            </button>
          )}

          <div className="px-3 py-1.5 rounded-full bg-white/80 text-xs font-semibold text-[#E75480] border border-[#FFD6E7] shadow-xs flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pure Love</span>
          </div>
        </div>
      </header>

      {/* Main Dynamic Story Screen */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-4 sm:py-8 px-2">
        <AnimatePresence mode="wait">
          {currentScreen === 'opening' && (
            <motion.div
              key="opening"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <OpeningScreen
                onAnswerYes={goToCooling}
                onAnswerNo={goToCuteSugar}
              />
            </motion.div>
          )}

          {currentScreen === 'cute-sugar' && (
            <motion.div
              key="cute-sugar"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <CuteSugarScreen onRestart={goToOpening} />
            </motion.div>
          )}

          {currentScreen === 'cooling' && (
            <motion.div
              key="cooling"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <CoolingScreen onContinue={goToApology} />
            </motion.div>
          )}

          {currentScreen === 'apology' && (
            <motion.div
              key="apology"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <ApologyScreen onCompleteAll={goToSorryFinale} />
            </motion.div>
          )}

          {currentScreen === 'sorry-finale' && (
            <motion.div
              key="sorry-finale"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <SorryFinale onNext={goToSugarFinal} />
            </motion.div>
          )}

          {currentScreen === 'sugar-final' && (
            <motion.div
              key="sugar-final"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <SugarScreen onRestart={goToOpening} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Romantic Footer */}
      <footer className="relative z-20 py-4 text-center text-xs font-semibold text-[#8B5970]/80">
        <p className="flex items-center justify-center gap-1.5">
          <span>Made with soft cuddles &amp; infinite love for</span>
          <span className="font-extrabold text-[#E75480]">Taanyaaa</span>
          <span>💗🧸</span>
        </p>
      </footer>
    </div>
  );
}
