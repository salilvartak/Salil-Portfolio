
import React from 'react';
import { Code, Lightbulb, Rocket,FileUser } from 'lucide-react';
import ResumeButton  from '@/components/ui/ResumeButton';
import BlurText from "./BlurText";
import FadeContent from './ui/FadeContent'

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


const About = () => {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    <section className="py-20 px-4 relative" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <BlurText
            text="About Me"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl md:text-6xl font-bold text-center mb-16 text-salil-sky"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                I’m a dedicated software developer with a passion for building impactful and innovative solutions. 
                I take pride in writing clean, maintainable code and thrive on transforming complex challenges into intuitive, 
                user-centric applications through thoughtful design and creative problem-solving.
              </p>
              <p>
                My journey in tech is fueled by an insatiable curiosity to explore new technologies and continuously push the boundaries 
                of what's possible. Whether it's designing seamless user experiences or architecting scalable backend systems, I bring a 
                meticulous, detail-oriented approach to every project.
              </p>
              <ResumeButton />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-white-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  <Code className="text-salil-blue w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-salil-blue">Clean Code</h3>
              </div>
              <p className="text-gray-400">Writing maintainable, scalable code that stands the test of time.</p>
            </div>
            
            <div className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-white-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  <Lightbulb className="text-salil-blue w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-salil-blue">Innovation</h3>
              </div>
              <p className="text-gray-400">Constantly exploring new technologies and creative solutions.</p>
            </div>
            
            <div className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-white-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white-300/30 transition-colors duration-300">
                  <Rocket className="text-salil-blue w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-salil-blue">Impact</h3>
              </div>
              <p className="text-gray-400">Building applications that solve real problems and create value.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    </FadeContent>
  );
};

export default About;
