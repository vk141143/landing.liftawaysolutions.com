import { useState, useEffect, useRef } from 'react';

export default function TestCarousel() {
  const [currentStage, setCurrentStage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.log('TestCarousel mounted, starting interval...');
    
    intervalRef.current = setInterval(() => {
      setCurrentStage((prev) => {
        const next = (prev + 1) % 3;
        console.log('Stage change:', prev, '->', next);
        return next;
      });
    }, 2000);

    return () => {
      console.log('TestCarousel unmounting, clearing interval');
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const stages = ['REQUEST', 'DRIVER_ASSIGNED', 'COMPLETED'];

  return (
    <div className="fixed top-4 left-4 bg-white p-4 border rounded shadow-lg z-50">
      <h3 className="font-bold mb-2">Test Carousel</h3>
      <p>Current Stage: {currentStage} ({stages[currentStage]})</p>
      <div className="flex gap-2 mt-2">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentStage(i)}
            className={`w-4 h-4 rounded-full ${
              i === currentStage ? 'bg-green-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}