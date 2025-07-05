
import React from 'react';
import { Code, Lightbulb, Rocket,FileUser } from 'lucide-react';
import ResumeButton  from '@/components/ui/ResumeButton';
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


const About = () => {
  return (
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
                I'm a passionate software developer who thrives on building innovative solutions 
                that make a real difference. With a deep love for clean code and creative problem-solving, 
                I transform complex challenges into elegant, user-friendly applications.
              </p>
              <p>
                My journey in tech is driven by an insatiable curiosity for learning new technologies 
                and pushing the boundaries of what's possible. Whether it's crafting seamless user 
                experiences or architecting robust backend systems, I approach every project with 
                dedication and attention to detail.
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
  );
};

export default About;
