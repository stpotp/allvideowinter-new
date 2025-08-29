import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('December 15, 2025 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-card rounded-xl p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-primary winter-glow tracking-wider">
            <span className="inline-block min-w-[3ch]">{String(timeLeft.days).padStart(3, '0')}</span>
            <span className="text-muted-foreground mx-2">:</span>
            <span className="inline-block min-w-[2ch]">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-muted-foreground mx-2">:</span>
            <span className="inline-block min-w-[2ch]">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-muted-foreground mx-2">:</span>
            <span className="inline-block min-w-[2ch]">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
          <div className="flex justify-center mt-4 gap-8 text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
            <span className="min-w-[3ch] text-center">Days</span>
            <span className="min-w-[2ch] text-center">Hours</span>
            <span className="min-w-[2ch] text-center">Minutes</span>
            <span className="min-w-[2ch] text-center">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;