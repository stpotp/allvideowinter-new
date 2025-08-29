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

  const CircularTimer = ({ value, max, label, size = 120 }: { value: number; max: number; label: string; size?: number }) => {
    const percentage = (value / max) * 100;
    const strokeDasharray = 2 * Math.PI * (size / 2 - 10);
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

    return (
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            className="transform -rotate-90"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - 10}
              stroke="hsl(var(--winter-frost))"
              strokeWidth="8"
              fill="transparent"
              className="opacity-30"
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - 10}
              stroke="hsl(var(--winter-blue))"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{
                filter: 'drop-shadow(0 0 8px hsl(var(--winter-blue) / 0.5))'
              }}
            />
          </svg>
          {/* Value display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary winter-glow">
                {String(value).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide">
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="timer-card rounded-xl p-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        <CircularTimer value={timeLeft.days} max={365} label="Days" size={120} />
        <CircularTimer value={timeLeft.hours} max={24} label="Hours" size={120} />
        <CircularTimer value={timeLeft.minutes} max={60} label="Minutes" size={120} />
        <CircularTimer value={timeLeft.seconds} max={60} label="Seconds" size={120} />
      </div>
    </div>
  );
};

export default CountdownTimer;