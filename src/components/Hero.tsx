import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroVideoSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover p-3"
        src={isMobile ? "/assets/mobile_2.mp4" : "/assets/Salil_2.mp4"}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="relative z-20 flex items-center justify-center h-full">
        {/* Add your center content here if needed */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <ChevronDown className="animate-bounce w-6 h-6 text-white opacity-80" />
      </div>
    </section>
  );
};

export default HeroVideoSection;
