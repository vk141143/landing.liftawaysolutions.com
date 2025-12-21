import { motion, AnimatePresence } from 'framer-motion';

export default function ChristmasGiftingScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Warm window lights scattered across the scene */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-4 bg-amber-300/40 rounded-sm blur-sm"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-3 bg-amber-200/30 rounded-sm blur-sm"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-4 h-3 bg-orange-200/35 rounded-sm blur-sm"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      {/* Subtle streetlight glow */}
      <motion.div
        className="absolute top-1/5 right-1/4 w-16 h-16 bg-amber-100/10 rounded-full blur-2xl"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Gentle morning mist effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50/5 to-transparent"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}