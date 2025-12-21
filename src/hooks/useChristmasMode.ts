import { useState, useEffect } from 'react';

export function useChristmasMode(): boolean {
  const [isChristmasMode, setIsChristmasMode] = useState(false);

  useEffect(() => {
    const checkChristmasMode = () => {
      const now = new Date();
      const month = now.getMonth();
      const date = now.getDate();
      
      // December (month 11) between 20th and 26th inclusive
      const isChristmas = month === 11 && date >= 20 && date <= 26;
      setIsChristmasMode(isChristmas);
    };

    checkChristmasMode();
    
    // Check every hour to be more responsive
    const interval = setInterval(checkChristmasMode, 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return isChristmasMode;
}