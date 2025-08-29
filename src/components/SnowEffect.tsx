import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  animationDuration: number;
  animationDelay: number;
}

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes: Snowflake[] = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 3 + 2,
          animationDuration: Math.random() * 3 + 2,
          animationDelay: Math.random() * 2,
        });
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;