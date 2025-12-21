import { AnimatePresence } from 'framer-motion';
import CustomerScene from './CustomerScene';
import DriverScene from './DriverScene';
import CompletionScene from './CompletionScene';
import ChristmasStoryLayer from './ChristmasStoryLayer';

interface LeftStorySceneProps {
  stage: number;
}

// Check if it's Christmas season (Dec 1-26)
const isChristmasSeason = () => {
  // Temporarily always return true to test the Christmas layer
  return true;
  // const now = new Date();
  // const month = now.getMonth();
  // const date = now.getDate();
  // return month === 11 && date <= 26; // December (0-indexed) and before Dec 27
};

export default function LeftStoryScene({ stage }: LeftStorySceneProps) {
  const showChristmas = isChristmasSeason();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Story Scenes */}
      <AnimatePresence mode="wait">
        {stage === 0 && <CustomerScene key="customer" />}
        {stage === 1 && <DriverScene key="driver" />}
        {stage === 2 && <CompletionScene key="completion" />}
      </AnimatePresence>

      {/* Subtle Christmas Emotional Story Layer */}
      {showChristmas && <ChristmasStoryLayer stage={stage} />}
    </div>
  );
}
