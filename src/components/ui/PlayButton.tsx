import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface PlayButtonProps {
  onClick: () => void;
}

export function PlayButton({ onClick }: PlayButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative z-50 px-12 py-6 !bg-yellow-400 border-8 border-black text-black tracking-widest overflow-hidden"
      style={{
        boxShadow: '8px 8px 0px rgba(0,0,0,0.8)',
        imageRendering: 'pixelated',
        fontFamily: 'monospace',
        fontSize: '1.5rem'
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '12px 12px 0px rgba(0,0,0,0.8)'
      }}
      whileTap={{ 
        scale: 0.95,
        boxShadow: '4px 4px 0px rgba(0,0,0,0.8)'
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
      }}
      transition={{ 
        delay: 0.5,
        type: "spring",
        stiffness: 200
      }}
    >
      {/* Animated shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: 'easeInOut'
        }}
      />
      
      <span className="relative flex items-center gap-3">
        <Play className="w-8 h-8 fill-black" style={{ imageRendering: 'pixelated' }} />
        PLAY
      </span>
    </motion.button>
  );
}
