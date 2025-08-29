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
    <div className="timer-card rounded-xl p-8 max-w-2xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl font-bold text-primary winter-glow mb-2">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
            Days
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl font-bold text-primary winter-glow mb-2">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
            Hours
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl font-bold text-primary winter-glow mb-2">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
            Minutes
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-4xl md:text-5xl font-bold text-primary winter-glow mb-2">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;