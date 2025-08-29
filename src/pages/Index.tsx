import CountdownTimer from '@/components/CountdownTimer';
import SnowEffect from '@/components/SnowEffect';

const Index = () => {
  return (
    <>
      <SnowEffect />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold winter-gradient-text winter-glow leading-tight">
            Winter Event | Allvideo Officials
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Winter event introduces Christmas Eve, High chance of ROBUX Giveaways, and some fun challenges!
          </p>

          {/* Timer Section */}
          <div className="space-y-6 pt-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground winter-glow">
              Timer For Release
            </h2>
            
            <CountdownTimer />
            
            <p className="text-xl md:text-2xl font-medium text-foreground pt-4">
              Join the Allvideo Discord Server
            </p>
            
            {/* Discord Button */}
            <div className="pt-6">
              <a
                href="https://discord.gg/H2TJAv2qgw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-winter inline-block px-8 py-4 text-lg font-semibold rounded-xl no-underline"
              >
                Join Server
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;