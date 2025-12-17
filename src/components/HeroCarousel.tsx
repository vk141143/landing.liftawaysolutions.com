import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedNavbar from './AnimatedNavbar';
import LeftStoryScene from './LeftStoryScene';
import RightTextContent from './RightTextContent';

enum HeroStage {
  REQUEST = 0,
  DRIVER_ASSIGNED = 1,
  COMPLETED = 2,
}

const slides = [
  {
    stage: HeroStage.REQUEST,
    title: 'Book Waste Pickup in Seconds',
    subtitle: 'Schedule doorstep waste collection with just one tap.',
    cta: 'Schedule Pickup',
  },
  {
    stage: HeroStage.DRIVER_ASSIGNED,
    title: 'Driver Notified Instantly',
    subtitle: 'Nearby drivers receive requests in real time.',
    cta: 'Track Driver',
  },
  {
    stage: HeroStage.COMPLETED,
    title: 'Pickup Completed. Pay & Chat Easily',
    subtitle: 'Cashless payments and in-app chat after pickup.',
    cta: 'Get Started',
  },
];

export default function HeroCarousel() {
  const [currentStage, setCurrentStage] = useState<HeroStage>(HeroStage.REQUEST);
  const autoPlayRef = useRef<number | null>(null);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  return (
    <>
      <AnimatedNavbar />
      <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#D1E7DD]/20 via-[#FAF7F2] to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0F5132]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#D1E7DD]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative h-full flex flex-col md:flex-row items-center">
        {/* LEFT SIDE - Animated Story Scene */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center order-2 md:order-1">
          <LeftStoryScene stage={currentStage} />
        </div>

        {/* RIGHT SIDE - Text & CTA */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center order-1 md:order-2 px-8 md:px-12">
          <AnimatePresence mode="wait">
            <RightTextContent key={currentStage} slide={slides[currentStage]} />
          </AnimatePresence>
        </div>
      </div>

      {/* Stage Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentStage ? 'bg-[#0F5132] w-8' : 'bg-[#0F5132]/30'
            }`}
          />
        ))}
      </div>
    </section>
    </>
  );
}
