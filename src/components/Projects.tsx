import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import BlurText from "./BlurText";
import FadeContent from './ui/FadeContent'
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const Projects = () => {
  const projects = [
    {
      title: 'Wordwave',
      description: 'An interactive language learning app designed specifically for kids, featuring gamified lessons and engaging visual elements.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: '/assets/projects/wordwave.png',
      gradient: 'from-black-400 to-black-100',
      codeLink: 'https://github.com/salilvartak/wordwave',
      demoLink: 'https://wordwave-rho.vercel.app/'
    },
    {
      title: 'Gaurdian Cam',
      description: 'Computer vision application using OpenCV to detect falls in real-time, providing immediate alerts for safety monitoring.',
      tech: ['Python', 'OpenCV', 'React', 'Firebase'],
      image: '/assets/projects/fall.png',
      gradient: 'from-black-400 to-black-100',
      codeLink: 'https://github.com/salilvartak/Guardian_Cam',
      demoLink: 'https://guardian-cam.vercel.app/'
    },
    {
      title: 'CGC Job Form Website',
      description: 'Modern, responsive web application for job applications with intuitive user interface and seamless form handling.',
      tech: ['React', 'TypeScript', 'MongoDB', 'Firebase'],
      image: '/assets/projects/CGC.png',
      gradient: 'from-blue-400 to-black-100',
      codeLink: 'https://github.com/salilvartak/Cgc-Job-Form',
      demoLink: 'https://i.ibb.co/7NTXktz2/Screenshot-2025-07-04-220052.png'
    },
    {
      title: 'Shreya Enterprise',
      description: 'Redesigned landing page for Shreya Enterprise to showcase their catalogue of products.',
      tech: ['React', 'TypeScript', 'AWS'],
      image: '/assets/projects/shreya.png',
      gradient: 'from-blue-400 to-black-100',
      codeLink: 'https://github.com/salilvartak/Shreya-Enterprise',
      demoLink: 'https://shreyaentp.in/'
    },
    
  ];

  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    <section className="py-20 px-4 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <BlurText
            text="Featured Projects"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl md:text-6xl font-bold text-center mb-16 text-salil-sky"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </FadeContent>
  );
};

export default Projects;
