import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ApologyCard, ApologyCardData } from '../cards/ApologyCard';
import { NavigationButton } from '../NavigationButton';

const CARDS_DATA: ApologyCardData[] = [
  {
    id: 1,
    closedTitle: 'One little thing... 💌',
    tagline: 'Letter 01',
    icon: '🥺',
    headline: "Taanyaaa, I didn't mean to hurt you. 🥺💗",
    body: "I genuinely never wanted to be the reason you're upset. I'm sorry that my words hurt you. Even if hurting you wasn't my intention, I understand that your feelings matter.",
    animationType: 'bear-offering-heart',
  },
  {
    id: 2,
    closedTitle: 'About what happened... 🫶🏻',
    tagline: 'Letter 02',
    icon: '🕊️',
    headline: 'The conversation escalated in a way neither of us wanted.',
    body: "Things got carried away, and I'm sorry for my part in that. I wish we could have handled it more gently instead of letting the conversation hurt us.",
    animationType: 'mending-heart',
  },
  {
    id: 3,
    closedTitle: 'Ek baat bataun? 🥹',
    tagline: 'Letter 03',
    icon: '✨',
    headline: 'Dekhlio ek baar apne aap ko meri nazron se. 💗',
    body: "Tujhe pata chalega ki tu kitni pyaari hai, JAANI. The way I see you is so much softer than the way you sometimes see yourself. You're genuinely special to me, Taanyaaa.",
    animationType: 'mirror',
  },
  {
    id: 4,
    closedTitle: 'One last promise... 🧸',
    tagline: 'Letter 04',
    icon: '🌸',
    headline: 'Naaraaz hogi toh manaunga main. 🥺💗',
    body: "Thoda pyaar se, thoda patience se, aur dher saari cuddles ke saath. I know I can't fix everything with cute words, but I'll try to understand you better and make things right, JAANI.",
    animationType: 'cuddle-blanket',
  },
];

interface ApologyScreenProps {
  onCompleteAll: () => void;
}

export const ApologyScreen: React.FC<ApologyScreenProps> = ({ onCompleteAll }) => {
  const [openedIds, setOpenedIds] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    if (!openedIds.includes(id)) {
      setOpenedIds((prev) => [...prev, id]);
    }
  };

  const allOpened = openedIds.length === CARDS_DATA.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto flex flex-col items-center text-center px-4 py-6"
    >
      {/* Diary Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#FFD6E7] text-xs font-bold text-[#E75480] mb-2 shadow-xs">
          <span>📖</span>
          <span>A Little Pink Diary</span>
          <span>🌸</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#75445B] tracking-tight">
          4 little things I want you to know, Taanyaaa... 💗
        </h2>
        <p className="text-sm sm:text-base text-[#8B5970] font-medium mt-1">
          Tap each heart to unfold a little piece of my heart. 💌
        </p>

        {/* Progress Dots / Counter */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {CARDS_DATA.map((card) => {
            const isDone = openedIds.includes(card.id);
            return (
              <div
                key={card.id}
                className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                  isDone
                    ? 'w-6 h-6 bg-[#FF5C93] text-white text-[11px] font-bold shadow-xs'
                    : 'w-2.5 h-2.5 bg-[#FFD6E7]'
                }`}
              >
                {isDone ? '✓' : ''}
              </div>
            );
          })}
          <span className="text-xs font-semibold text-[#8B5970] ml-2">
            {openedIds.length}/4 letters unfolded
          </span>
        </div>
      </div>

      {/* Cards List */}
      <div className="w-full">
        {CARDS_DATA.map((card) => (
          <ApologyCard
            key={card.id}
            data={card}
            isOpen={openedIds.includes(card.id)}
            onToggle={() => toggleCard(card.id)}
          />
        ))}
      </div>

      {/* When all cards are opened, show next step button */}
      {allOpened && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mt-4 p-5 rounded-3xl bg-white/95 border-2 border-[#FF5C93] shadow-xl shadow-[#FF8FB8]/30 flex flex-col items-center"
        >
          <div className="text-2xl mb-1 animate-heartbeat">💖</div>
          <h3 className="text-lg font-bold text-[#75445B] mb-1">
            You&apos;ve read all my little letters... 🥹
          </h3>
          <p className="text-xs text-[#8B5970] mb-4">
            There&apos;s one more special thing from my heart for you, JAANI.
          </p>

          <NavigationButton
            onClick={onCompleteAll}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto animate-pulse-glow"
          >
            HEAR MY FINAL WORDS, TAANYAAA 💌
          </NavigationButton>
        </motion.div>
      )}
    </motion.div>
  );
};
