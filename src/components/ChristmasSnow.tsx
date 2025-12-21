import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface ChristmasSnowProps {
  currentStage: number;
}

export default function ChristmasSnow({ currentStage }: ChristmasSnowProps) {
  const snowflakes = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 2 + Math.random() * 3,
    })), []
  );

  const snowIntensity = currentStage === 1 ? 0.8 : 0.4;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute bg-white/60 rounded-full"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(flake.id) * 20],
            opacity: [0, snowIntensity, snowIntensity, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}