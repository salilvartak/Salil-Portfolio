import { useEffect, useState } from "react";

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
      <div className="absolute inset-0 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full">
        
      </div>
    </section>
  );
};

export default HeroVideoSection;
