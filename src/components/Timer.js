import { useState, useEffect } from 'react';

const Timer = () => {
  // const [remainingTime, setRemainingTime] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState({
    mins: 0,
    secs: 0,
    totalSecs: 25 * 60,
  });
  const [timeEnd, setTimeEnd] = useState(new Date().getTime() / 1000 + 10); // 25 * 60
  const [isActive, setIsActive] = useState(true);
  // const []

  const calculateTimeLeft = () => {
    const time = new Date().getTime() / 1000;
    const difference = Math.floor(timeEnd - time);

    return {
      mins: Math.floor(difference / 60),
      secs: difference % 60,
      totalSecs: difference,
    };
  };

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  useEffect(() => {
    if (timeLeft.totalSecs === 0) {
      setIsActive(false);
    }
  }, [timeLeft, isActive]);

  return (
    <div className="card w-full bg-gradient-to-bl from-indigo-300 to-indigo-400">
      <div className="text-6xl font-medium text-center py-20">
        {timeLeft.mins}:{timeLeft.secs}
      </div>
    </div>
  );
};

export default Timer;
