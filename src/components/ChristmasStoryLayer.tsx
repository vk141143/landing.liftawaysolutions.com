import { motion } from 'framer-motion';

interface ChristmasStoryLayerProps {
  stage: number;
}

export default function ChristmasStoryLayer({ stage }: ChristmasStoryLayerProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Enhanced Snowfall - Always Present */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/80 rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ['0vh', '120vh'],
              x: [0, Math.sin(i) * 40],
              opacity: [0, 1, 0.8, 0],
              scale: [0.5, 1, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Moment 1: Someone Needs Help */}
      {stage === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Enhanced Warm Window Light */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-24 h-32 bg-amber-400/40 rounded-lg"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              boxShadow: [
                '0 0 60px rgba(251, 191, 36, 0.4)',
                '0 0 100px rgba(251, 191, 36, 0.6)',
                '0 0 60px rgba(251, 191, 36, 0.4)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Christmas Lights */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${20 + i * 8}%`,
                top: `${15 + Math.sin(i) * 5}%`,
                backgroundColor: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#22c55e' : '#3b82f6',
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Text Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2"
          >
            <p className="text-slate-800 text-base font-medium tracking-wide">
              Someone cared enough to show up.
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Moment 2: Someone Shows Up */}
      {stage === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {/* Enhanced Cold Breath Effect */}
          <motion.div
            className="absolute top-1/2 left-1/3 w-16 h-12 bg-white/30 rounded-full blur-md"
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5, 2],
              x: [0, 30, 50],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
          />

          {/* Enhanced Streetlight Glow */}
          <motion.div
            className="absolute top-16 right-1/3 w-6 h-6 bg-amber-300/60 rounded-full"
            animate={{
              boxShadow: [
                '0 0 40px rgba(252, 211, 77, 0.5)',
                '0 0 80px rgba(252, 211, 77, 0.8)',
                '0 0 40px rgba(252, 211, 77, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Footprints in Snow */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-6 bg-white/20 rounded-full"
              style={{
                left: `${30 + i * 8}%`,
                bottom: `${40 - i * 3}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.4, 0.2], scale: [0, 1, 0.8] }}
              transition={{
                duration: 0.5,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Text Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2"
          >
            <p className="text-slate-800 text-base font-medium tracking-wide">
              Quiet acts keep communities moving.
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Moment 3: Kindness Completed */}
      {stage === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {/* Enhanced Warm Light */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-24 h-32 bg-amber-400/30 rounded-lg"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              boxShadow: [
                '0 0 50px rgba(251, 191, 36, 0.3)',
                '0 0 100px rgba(251, 191, 36, 0.5)',
                '0 0 50px rgba(251, 191, 36, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Christmas Tree */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/3 left-1/4"
          >
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
              <path d="M20 5 L10 25 L30 25 Z" fill="#22c55e" />
              <path d="M20 15 L8 35 L32 35 Z" fill="#16a34a" />
              <path d="M20 25 L6 45 L34 45 Z" fill="#15803d" />
              <rect x="18" y="45" width="4" height="10" fill="#92400e" />
              <circle cx="20" cy="10" r="2" fill="#fbbf24" />
            </svg>
          </motion.div>

          {/* Gentle Snow Settling */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-blue-100/20"
            animate={{ opacity: [0, 0.6, 0.4] }}
            transition={{ duration: 3 }}
          />

          {/* Text Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2"
          >
            <p className="text-slate-800 text-base font-medium tracking-wide">
              This Christmas, kindness matters.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
