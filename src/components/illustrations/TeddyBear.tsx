import React from 'react';
import { motion } from 'motion/react';

export type TeddyBearPose =
  | 'holding-heart'
  | 'blushing'
  | 'cooling'
  | 'sorry-sign'
  | 'cuddle'
  | 'holding-sugar-sign'
  | 'offering-heart-both-paws';

interface TeddyBearProps {
  pose?: TeddyBearPose;
  className?: string;
  size?: number;
}

export const TeddyBear: React.FC<TeddyBearProps> = ({
  pose = 'holding-heart',
  className = '',
  size = 220,
}) => {
  // Common teddy bear color constants
  const furBody = '#E8A57A';
  const furLight = '#FCE0CE';
  const furDark = '#CB7F4E';
  const blush = '#FF8FB8';
  const nose = '#583120';
  const heartPink = '#FF5C93';
  const heartLight = '#FF8FB8';

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {pose === 'holding-heart' && (
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full filter drop-shadow-md"
          initial={{ scale: 0.9, y: 5 }}
          animate={{ scale: [0.95, 1, 0.95], y: [0, -4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Subtle glow behind */}
          <circle cx="100" cy="110" r="75" fill="#FFD6E7" opacity="0.5" />

          {/* Ears */}
          <circle cx="60" cy="58" r="24" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="60" cy="58" r="14" fill={furLight} />
          <circle cx="140" cy="58" r="24" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="140" cy="58" r="14" fill={furLight} />

          {/* Body */}
          <ellipse cx="100" cy="130" rx="55" ry="50" fill={furBody} stroke={furDark} strokeWidth="3" />
          <ellipse cx="100" cy="135" rx="35" ry="32" fill={furLight} />

          {/* Feet */}
          <ellipse cx="65" cy="165" rx="20" ry="14" fill={furBody} stroke={furDark} strokeWidth="3" />
          <ellipse cx="65" cy="165" rx="12" ry="8" fill={furLight} />
          <circle cx="60" cy="159" r="2.5" fill="#CB7F4E" />
          <circle cx="65" cy="157" r="2.5" fill="#CB7F4E" />
          <circle cx="70" cy="159" r="2.5" fill="#CB7F4E" />

          <ellipse cx="135" cy="165" rx="20" ry="14" fill={furBody} stroke={furDark} strokeWidth="3" />
          <ellipse cx="135" cy="165" rx="12" ry="8" fill={furLight} />
          <circle cx="130" cy="159" r="2.5" fill="#CB7F4E" />
          <circle cx="135" cy="157" r="2.5" fill="#CB7F4E" />
          <circle cx="140" cy="159" r="2.5" fill="#CB7F4E" />

          {/* Head */}
          <circle cx="100" cy="85" r="48" fill={furBody} stroke={furDark} strokeWidth="3" />
          
          {/* Snout */}
          <ellipse cx="100" cy="98" rx="22" ry="17" fill={furLight} />
          <path d="M94 92 C96 89, 104 89, 106 92 C108 96, 92 96, 94 92 Z" fill={nose} />
          <path d="M100 95 L100 102 M96 102 Q100 106 104 102" stroke={nose} strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Eyes (warm & shiny) */}
          <ellipse cx="80" cy="82" rx="5" ry="6" fill="#3D1D11" />
          <circle cx="78" cy="80" r="2" fill="#FFF" />
          <circle cx="82" cy="84" r="0.8" fill="#FFF" />

          <ellipse cx="120" cy="82" rx="5" ry="6" fill="#3D1D11" />
          <circle cx="118" cy="80" r="2" fill="#FFF" />
          <circle cx="122" cy="84" r="0.8" fill="#FFF" />

          {/* Cute Blushing Cheeks */}
          <ellipse cx="72" cy="94" rx="8" ry="5" fill={blush} opacity="0.65" />
          <ellipse cx="128" cy="94" rx="8" ry="5" fill={blush} opacity="0.65" />

          {/* Arms holding Big Pink Heart */}
          <motion.g
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '100px 125px' }}
          >
            {/* Pink Heart */}
            <path
              d="M100 145 C80 120, 65 105, 75 92 C85 80, 96 88, 100 94 C104 88, 115 80, 125 92 C135 105, 120 120, 100 145 Z"
              fill={heartPink}
              stroke="#FFF"
              strokeWidth="2.5"
            />
            {/* Heart shine */}
            <path
              d="M82 95 C82 91, 87 88, 92 90"
              stroke="#FFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            {/* Sparkle on heart */}
            <circle cx="118" cy="100" r="2" fill="#FFF" opacity="0.8" />
          </motion.g>

          {/* Paws holding the heart */}
          <circle cx="78" cy="118" r="12" fill={furBody} stroke={furDark} strokeWidth="2.5" />
          <circle cx="78" cy="118" r="6" fill={furLight} />
          <circle cx="122" cy="118" r="12" fill={furBody} stroke={furDark} strokeWidth="2.5" />
          <circle cx="122" cy="118" r="6" fill={furLight} />
        </motion.svg>
      )}

      {pose === 'blushing' && (
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full filter drop-shadow-md"
          initial={{ rotate: -2 }}
          animate={{ rotate: [-2, 2, -2], y: [0, -3, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Subtle blush aura */}
          <circle cx="100" cy="100" r="75" fill="#FFD6E7" opacity="0.6" />

          {/* Ears */}
          <circle cx="62" cy="55" r="22" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="62" cy="55" r="13" fill={furLight} />
          <circle cx="138" cy="55" r="22" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="138" cy="55" r="13" fill={furLight} />

          {/* Body */}
          <ellipse cx="100" cy="130" rx="52" ry="46" fill={furBody} stroke={furDark} strokeWidth="3" />
          <ellipse cx="100" cy="133" rx="32" ry="30" fill={furLight} />

          {/* Head tilted slightly */}
          <g transform="rotate(3 100 85)">
            <circle cx="100" cy="85" r="46" fill={furBody} stroke={furDark} strokeWidth="3" />
            <ellipse cx="100" cy="96" rx="20" ry="15" fill={furLight} />
            <path d="M95 91 C97 88, 103 88, 105 91 C107 94, 93 94, 95 91 Z" fill={nose} />
            <path d="M100 93 L100 99 M97 99 Q100 102 103 99" stroke={nose} strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Shy closed/happy curved eyes */}
            <path d="M76 82 Q81 76 86 82" stroke="#3D1D11" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M114 82 Q119 76 124 82" stroke="#3D1D11" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Rosy glowing blush patches */}
            <ellipse cx="72" cy="90" rx="10" ry="7" fill="#FF6B9B" opacity="0.8" />
            <ellipse cx="128" cy="90" rx="10" ry="7" fill="#FF6B9B" opacity="0.8" />
            <circle cx="70" cy="89" r="1.5" fill="#FFF" />
            <circle cx="126" cy="89" r="1.5" fill="#FFF" />
          </g>

          {/* Paws covering cheeks shyly: 🥺👉👈 */}
          <motion.g
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="78" cy="110" r="13" fill={furBody} stroke={furDark} strokeWidth="2.5" />
            <circle cx="78" cy="110" r="7" fill={furLight} />
            <circle cx="122" cy="110" r="13" fill={furBody} stroke={furDark} strokeWidth="2.5" />
            <circle cx="122" cy="110" r="7" fill={furLight} />
          </motion.g>

          {/* Tiny floating heart near head */}
          <motion.path
            d="M145 50 C138 40, 130 46, 134 52 C138 58, 145 64, 145 64 C145 64, 152 58, 156 52 C160 46, 152 40, 145 50 Z"
            fill="#FF8FB8"
            animate={{ y: [-2, -8, -2], opacity: [0.7, 1, 0.7], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.svg>
      )}

      {pose === 'cooling' && (
        <motion.svg
          viewBox="0 0 220 200"
          className="w-full h-full filter drop-shadow-md"
          initial={{ y: 5 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Gentle breeze waves */}
          <motion.path
            d="M10 60 Q30 50 50 60 T90 60"
            stroke="#FF8FB8"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            opacity="0.6"
            animate={{ x: [-10, 15, -10], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.path
            d="M20 75 Q40 65 60 75 T100 75"
            stroke="#FFD6E7"
            strokeWidth="2.5"
            strokeDasharray="5 5"
            fill="none"
            opacity="0.8"
            animate={{ x: [-5, 20, -5], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
          />

          {/* Teddy Head and Ears */}
          <circle cx="75" cy="55" r="22" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="75" cy="55" r="13" fill={furLight} />
          <circle cx="145" cy="55" r="22" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="145" cy="55" r="13" fill={furLight} />

          <circle cx="110" cy="85" r="46" fill={furBody} stroke={furDark} strokeWidth="3" />
          <ellipse cx="110" cy="98" rx="20" ry="15" fill={furLight} />
          <path d="M105 92 C107 89, 113 89, 115 92 C117 95, 103 95, 105 92 Z" fill={nose} />
          <path d="M110 94 L110 101 M107 101 Q110 104 113 101" stroke={nose} strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Gentle empathetic eyes */}
          <ellipse cx="92" cy="84" rx="5" ry="6" fill="#3D1D11" />
          <circle cx="90" cy="82" r="2" fill="#FFF" />
          <ellipse cx="128" cy="84" rx="5" ry="6" fill="#3D1D11" />
          <circle cx="126" cy="82" r="2" fill="#FFF" />

          {/* Blushing cheeks */}
          <ellipse cx="85" cy="94" rx="8" ry="5" fill={blush} opacity="0.6" />
          <ellipse cx="135" cy="94" rx="8" ry="5" fill={blush} opacity="0.6" />

          {/* Body */}
          <ellipse cx="110" cy="135" rx="50" ry="42" fill={furBody} stroke={furDark} strokeWidth="3" />

          {/* Left paw holding pink cooling fan */}
          <g>
            <motion.g
              animate={{ rotate: [-20, 10, -20] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '48px 105px' }}
            >
              {/* Fan handle */}
              <line x1="48" y1="105" x2="35" y2="70" stroke="#CB7F4E" strokeWidth="4" strokeLinecap="round" />
              {/* Fan blades */}
              <circle cx="35" cy="65" r="16" fill="#FF8FB8" stroke="#E75480" strokeWidth="2" opacity="0.9" />
              <path d="M35 55 C40 50, 48 55, 35 65 Z" fill="#FFF" opacity="0.7" />
              <path d="M35 75 C30 80, 22 75, 35 65 Z" fill="#FFF" opacity="0.7" />
              <circle cx="35" cy="65" r="4" fill="#E75480" />
            </motion.g>
            {/* Paw holding handle */}
            <circle cx="50" cy="108" r="11" fill={furBody} stroke={furDark} strokeWidth="2" />
          </g>

          {/* Right paw offering Heart-shaped Pillow */}
          <g>
            {/* Soft pink heart pillow */}
            <motion.g
              animate={{ scale: [1, 1.05, 1], y: [0, -3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M155 140 C140 120, 125 105, 140 92 C150 82, 162 88, 168 96 C174 88, 186 82, 196 92 C210 105, 195 120, 170 145 Z"
                fill="#FFD6E7"
                stroke="#FF8FB8"
                strokeWidth="3"
              />
              {/* Pillow cushion stitch details */}
              <path d="M148 100 Q155 110 162 120" stroke="#FF8FB8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              <path d="M188 100 Q180 110 174 120" stroke="#FF8FB8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
              {/* Little bow or ribbon on pillow */}
              <circle cx="168" cy="98" r="4" fill="#E75480" />
            </motion.g>
            <circle cx="140" cy="120" r="11" fill={furBody} stroke={furDark} strokeWidth="2" />
          </g>
        </motion.svg>
      )}

      {pose === 'sorry-sign' && (
        <motion.svg
          viewBox="0 0 220 220"
          className="w-full h-full filter drop-shadow-lg"
          initial={{ scale: 0.92 }}
          animate={{ scale: [0.96, 1.02, 0.96] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Radiant sparkles behind */}
          <g opacity="0.8">
            <circle cx="35" cy="45" r="3" fill="#FF8FB8" />
            <circle cx="185" cy="40" r="4" fill="#FF8FB8" />
            <circle cx="25" cy="140" r="3" fill="#E75480" />
            <circle cx="195" cy="150" r="3.5" fill="#E75480" />
          </g>

          {/* Ears */}
          <circle cx="70" cy="48" r="23" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="70" cy="48" r="13" fill={furLight} />
          <circle cx="150" cy="48" r="23" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="150" cy="48" r="13" fill={furLight} />

          {/* Head with pleading eyes */}
          <circle cx="110" cy="75" r="48" fill={furBody} stroke={furDark} strokeWidth="3" />
          <ellipse cx="110" cy="88" rx="22" ry="16" fill={furLight} />
          <path d="M104 82 C106 79, 114 79, 116 82 C118 85, 102 85, 104 82 Z" fill={nose} />
          <path d="M110 84 L110 92 M106 92 Q110 95 114 92" stroke={nose} strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Big Pleading puppy-dog eyes 🥺 */}
          <ellipse cx="90" cy="72" rx="6" ry="7.5" fill="#3D1D11" />
          <circle cx="88" cy="69" r="2.8" fill="#FFF" />
          <circle cx="93" cy="75" r="1.2" fill="#FFF" />

          <ellipse cx="130" cy="72" rx="6" ry="7.5" fill="#3D1D11" />
          <circle cx="128" cy="69" r="2.8" fill="#FFF" />
          <circle cx="133" cy="75" r="1.2" fill="#FFF" />

          {/* Pink blush */}
          <ellipse cx="80" cy="84" rx="9" ry="6" fill={blush} opacity="0.75" />
          <ellipse cx="140" cy="84" rx="9" ry="6" fill={blush} opacity="0.75" />

          {/* Large Heart with "SORRY" */}
          <g>
            <path
              d="M110 185 C70 145, 45 120, 60 98 C72 82, 94 86, 110 102 C126 86, 148 82, 160 98 C175 120, 150 145, 110 185 Z"
              fill="#FF5C93"
              stroke="#FFF"
              strokeWidth="4"
              className="filter drop-shadow-md"
            />
            {/* Heart gleam */}
            <path d="M72 102 C72 96, 78 92, 86 94" stroke="#FFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />

            {/* "SORRY" Text */}
            <text
              x="110"
              y="138"
              fill="#FFFFFF"
              fontSize="24"
              fontWeight="900"
              letterSpacing="3"
              textAnchor="middle"
              fontFamily="Nunito, sans-serif"
              className="drop-shadow-sm select-none"
            >
              SORRY
            </text>
            <text
              x="110"
              y="156"
              fill="#FFEBF3"
              fontSize="12"
              fontWeight="700"
              textAnchor="middle"
              fontFamily="Quicksand, sans-serif"
            >
              JAANI 💗
            </text>
          </g>

          {/* Paws holding the big heart */}
          <circle cx="65" cy="115" r="13" fill={furBody} stroke={furDark} strokeWidth="2.5" />
          <circle cx="65" cy="115" r="7" fill={furLight} />
          <circle cx="155" cy="115" r="13" fill={furBody} stroke={furDark} strokeWidth="2.5" />
          <circle cx="155" cy="115" r="7" fill={furLight} />
        </motion.svg>
      )}

      {pose === 'cuddle' && (
        <motion.svg
          viewBox="0 0 240 200"
          className="w-full h-full filter drop-shadow-md"
          initial={{ scale: 0.96 }}
          animate={{ scale: [0.97, 1.01, 0.97] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Warm background glow */}
          <ellipse cx="120" cy="110" rx="90" ry="70" fill="#FFD6E7" opacity="0.5" />

          {/* Left Bear */}
          <circle cx="65" cy="60" r="19" fill={furBody} stroke={furDark} strokeWidth="2.5" />
          <circle cx="65" cy="60" r="10" fill={furLight} />
          <circle cx="105" cy="60" r="17" fill={furBody} stroke={furDark} strokeWidth="2.5" />
          <circle cx="85" cy="85" r="38" fill={furBody} stroke={furDark} strokeWidth="2.5" />
          {/* Snout */}
          <ellipse cx="92" cy="94" rx="14" ry="11" fill={furLight} />
          <circle cx="92" cy="90" r="3.5" fill={nose} />
          {/* Eye */}
          <path d="M78 84 Q82 80 86 84" stroke="#3D1D11" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <ellipse cx="78" cy="92" rx="7" ry="4" fill={blush} opacity="0.7" />

          {/* Right Bear (Light Cream Fur) */}
          <circle cx="175" cy="60" r="19" fill="#E8B896" stroke="#B8805A" strokeWidth="2.5" />
          <circle cx="175" cy="60" r="10" fill="#FFF0E6" />
          <circle cx="135" cy="60" r="17" fill="#E8B896" stroke="#B8805A" strokeWidth="2.5" />
          <circle cx="155" cy="85" r="38" fill="#E8B896" stroke="#B8805A" strokeWidth="2.5" />
          {/* Snout */}
          <ellipse cx="148" cy="94" rx="14" ry="11" fill="#FFF0E6" />
          <circle cx="148" cy="90" r="3.5" fill={nose} />
          {/* Eye */}
          <path d="M154 84 Q158 80 162 84" stroke="#3D1D11" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <ellipse cx="162" cy="92" rx="7" ry="4" fill={blush} opacity="0.7" />

          {/* Cozy Pastel Pink Blanket covering them */}
          <path
            d="M40 120 Q120 100 200 120 Q210 160 195 175 Q120 185 45 175 Q30 160 40 120 Z"
            fill="#FF8FB8"
            stroke="#E75480"
            strokeWidth="3"
          />
          {/* Blanket pattern (little hearts and stars) */}
          <path d="M75 140 C72 135, 78 132, 82 136 C86 132, 92 135, 89 140 C85 145, 82 147, 82 147 C82 147, 79 145, 75 140 Z" fill="#FFF" opacity="0.8" />
          <path d="M155 140 C152 135, 158 132, 162 136 C166 132, 172 135, 169 140 C165 145, 162 147, 162 147 C162 147, 159 145, 155 140 Z" fill="#FFF" opacity="0.8" />
          <circle cx="120" cy="150" r="3" fill="#FFF" opacity="0.9" />

          {/* Floating tiny heart above their heads */}
          <motion.path
            d="M120 52 C115 42, 106 48, 111 55 C116 62, 120 66, 120 66 C120 66, 124 62, 129 55 C134 48, 125 42, 120 52 Z"
            fill="#E75480"
            animate={{ scale: [1, 1.25, 1], y: [0, -6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      )}

      {pose === 'holding-sugar-sign' && (
        <motion.svg
          viewBox="0 0 220 220"
          className="w-full h-full filter drop-shadow-md"
          initial={{ y: 5 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Ears */}
          <circle cx="70" cy="50" r="22" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="70" cy="50" r="13" fill={furLight} />
          <circle cx="150" cy="50" r="22" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="150" cy="50" r="13" fill={furLight} />

          {/* Head */}
          <circle cx="110" cy="80" r="46" fill={furBody} stroke={furDark} strokeWidth="3" />
          <ellipse cx="110" cy="94" rx="20" ry="15" fill={furLight} />
          <path d="M105 88 C107 85, 113 85, 115 88 C117 91, 103 91, 105 88 Z" fill={nose} />
          <path d="M110 90 L110 97 M107 97 Q110 100 113 97" stroke={nose} strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Cute sweet eyes */}
          <ellipse cx="92" cy="78" rx="5" ry="6" fill="#3D1D11" />
          <circle cx="90" cy="76" r="2" fill="#FFF" />
          <ellipse cx="128" cy="78" rx="5" ry="6" fill="#3D1D11" />
          <circle cx="126" cy="76" r="2" fill="#FFF" />

          {/* Blushing */}
          <ellipse cx="82" cy="90" rx="9" ry="6" fill={blush} opacity="0.8" />
          <ellipse cx="138" cy="90" rx="9" ry="6" fill={blush} opacity="0.8" />

          {/* Body */}
          <ellipse cx="110" cy="140" rx="48" ry="42" fill={furBody} stroke={furDark} strokeWidth="3" />

          {/* Wooden / Pastel Sign: "Can I get sugar? 🥺💋" */}
          <g>
            {/* Stick */}
            <rect x="107" y="145" width="6" height="40" rx="2" fill="#CB7F4E" />

            {/* Signboard */}
            <rect
              x="25"
              y="120"
              width="170"
              height="52"
              rx="14"
              fill="#FFFFFF"
              stroke="#FF8FB8"
              strokeWidth="3"
              className="filter drop-shadow-sm"
            />
            <text
              x="110"
              y="142"
              fill="#E75480"
              fontSize="14"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="Quicksand, sans-serif"
            >
              Can I get sugar?
            </text>
            <text
              x="110"
              y="160"
              fill="#75445B"
              fontSize="13"
              fontWeight="700"
              textAnchor="middle"
            >
              🥺💋
            </text>
          </g>

          {/* Paws holding the sign */}
          <circle cx="50" cy="145" r="11" fill={furBody} stroke={furDark} strokeWidth="2" />
          <circle cx="170" cy="145" r="11" fill={furBody} stroke={furDark} strokeWidth="2" />
        </motion.svg>
      )}

      {pose === 'offering-heart-both-paws' && (
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full filter drop-shadow-md"
          initial={{ y: 5 }}
          animate={{ y: [0, -5, 0], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Ears */}
          <circle cx="60" cy="55" r="22" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="60" cy="55" r="13" fill={furLight} />
          <circle cx="140" cy="55" r="22" fill={furBody} stroke={furDark} strokeWidth="3" />
          <circle cx="140" cy="55" r="13" fill={furLight} />

          {/* Head */}
          <circle cx="100" cy="85" r="46" fill={furBody} stroke={furDark} strokeWidth="3" />
          <ellipse cx="100" cy="98" rx="20" ry="15" fill={furLight} />
          <path d="M95 92 C97 89, 103 89, 105 92 C107 95, 93 95, 95 92 Z" fill={nose} />
          <path d="M100 94 L100 101 M97 101 Q100 104 103 101" stroke={nose} strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Loving eyes */}
          <ellipse cx="82" cy="82" rx="5" ry="6" fill="#3D1D11" />
          <circle cx="80" cy="80" r="2" fill="#FFF" />
          <ellipse cx="118" cy="82" rx="5" ry="6" fill="#3D1D11" />
          <circle cx="116" cy="80" r="2" fill="#FFF" />

          {/* Cheeks */}
          <ellipse cx="74" cy="94" rx="8" ry="5" fill={blush} opacity="0.75" />
          <ellipse cx="126" cy="94" rx="8" ry="5" fill={blush} opacity="0.75" />

          {/* Body */}
          <ellipse cx="100" cy="138" rx="46" ry="40" fill={furBody} stroke={furDark} strokeWidth="3" />

          {/* Floating glowing heart between outstretched paws */}
          <motion.g
            animate={{ scale: [1, 1.12, 1], y: [0, -4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '100px 130px' }}
          >
            <path
              d="M100 152 C84 130, 72 118, 80 106 C88 94, 98 100, 100 106 C102 100, 112 94, 120 106 C128 118, 116 130, 100 152 Z"
              fill="#FF5C93"
              stroke="#FFF"
              strokeWidth="3"
            />
            <path d="M86 110 C86 106, 90 103, 94 105" stroke="#FFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
          </motion.g>

          {/* Outstretched Paws */}
          <circle cx="68" cy="132" r="13" fill={furBody} stroke={furDark} strokeWidth="2.5" />
          <circle cx="68" cy="132" r="7" fill={furLight} />
          <circle cx="132" cy="132" r="13" fill={furBody} stroke={furDark} strokeWidth="2.5" />
          <circle cx="132" cy="132" r="7" fill={furLight} />
        </motion.svg>
      )}
    </div>
  );
};
