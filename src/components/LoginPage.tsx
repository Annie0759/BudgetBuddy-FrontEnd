import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export function LoginPage({ onBack,onLoginSuccess }: LoginPageProps) {
  return (
    <div 
      className="fixed inset-0 overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #8b5cf6 0%, #8b5cf6 20%, #f012be 35%, #f012be 50%, #ff6b35 65%, #ff6b35 80%, #ffb399 100%)'
      }}
    >
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 bg-white/90 p-12 rounded-none border-8 border-black"
        style={{
          boxShadow: '8px 8px 0px rgba(0,0,0,0.8)',
          imageRendering: 'pixelated'
        }}
      >
        <button
          onClick={onBack}
          className="absolute top-4 left-4 p-2 hover:bg-black/10 border-4 border-black"
          style={{ imageRendering: 'pixelated' }}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h2 
          className="text-center mb-8 tracking-wider"
          style={{
            fontSize: '2.5rem',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            fontFamily: 'monospace'
          }}
        >
          Login
        </h2>

        <div className="space-y-6 min-w-[320px]">
          <div>
            <label 
              className="block mb-2 tracking-wide"
              style={{ fontFamily: 'monospace' }}
            >
              Username
            </label>
            <input
              type="text"
              className="w-full p-4 border-4 border-black focus:outline-none focus:border-purple-600"
              style={{
                imageRendering: 'pixelated',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
                fontFamily: 'monospace'
              }}
              placeholder="Enter username"
            />
          </div>

          <div>
            <label 
              className="block mb-2 tracking-wide"
              style={{ fontFamily: 'monospace' }}
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-4 border-4 border-black focus:outline-none focus:border-purple-600"
              style={{
                imageRendering: 'pixelated',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
                fontFamily: 'monospace'
              }}
              placeholder="Enter password"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick = {onLoginSuccess}
            className="w-full p-4 bg-purple-600 text-white border-4 border-black tracking-wide"
            style={{
              boxShadow: '6px 6px 0px rgba(0,0,0,0.8)',
              imageRendering: 'pixelated',
              fontFamily: 'monospace'
            }}
          >
            START GAME
          </motion.button>

          <p 
            className="text-center text-sm tracking-wide"
            style={{ fontFamily: 'monospace' }}
          >
            New Player? <span className="text-purple-600 cursor-pointer hover:underline">Sign Up</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
