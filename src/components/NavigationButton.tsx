import React from 'react';
import { motion } from 'motion/react';

interface NavigationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'soft';
  className?: string;
  size?: 'md' | 'lg' | 'xl';
  disabled?: boolean;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  className = '',
  size = 'lg',
  disabled = false,
}) => {
  const sizeClasses = {
    md: 'min-h-[44px] px-5 py-2.5 text-sm',
    lg: 'min-h-[50px] px-7 py-3 text-base',
    xl: 'min-h-[56px] px-8 py-3.5 text-lg',
  }[size];

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#FF5C93] via-[#E75480] to-[#D83B6F] text-white shadow-lg shadow-[#E75480]/30 hover:shadow-xl hover:shadow-[#E75480]/40 border border-white/40',
    secondary:
      'bg-white/90 text-[#75445B] hover:bg-white shadow-md shadow-[#FF8FB8]/20 border border-[#FFD6E7]',
    accent:
      'bg-gradient-to-r from-[#FF8FB8] to-[#FF5C93] text-white shadow-md shadow-[#FF8FB8]/40 border border-white/50',
    soft:
      'bg-[#FFD6E7]/80 hover:bg-[#FFD6E7] text-[#75445B] border border-[#FF8FB8]/40 shadow-xs',
  }[variant];

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`relative inline-flex items-center justify-center font-bold rounded-full tracking-wide transition-all cursor-pointer select-none outline-none focus-visible:ring-3 focus-visible:ring-[#FF8FB8] ${sizeClasses} ${variantClasses} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-xs">
        {children}
      </span>
      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
      )}
    </motion.button>
  );
};
