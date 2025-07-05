
import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isHovered, setIsHovered] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send('service_na8gp2j', 'template_ahdlue7', formData, 'FTe4Tfop5iIRygNAr')
    .then(() => {
      alert('Message sent!');
    })
    .catch((error) => {
      console.error('FAILED...', error);
    });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 relative" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <BlurText
            text="Let's Connect"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl md:text-6xl font-bold text-center mb-16 text-salil-sky"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always excited to collaborate on new projects or discuss innovative ideas. 
                Whether you're looking for a developer to bring your vision to life or just want 
                to connect, I'd love to hear from you!
              </p>
            </div>
            
            <div className="space-y-4">
              <a
                href="mailto:Salilv1103@gmail.com"
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Mail className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">Salilv1103@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://github.com/salilvartak"
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-white/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  <Github className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-gray-400">@salilvartak</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/salil-vartak-144977198/"
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-300/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-300/20 rounded-lg group-hover:bg-blue-300/30 transition-colors duration-300">
                  <Linkedin className="text-blue-300 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-gray-400">Salil Vartak</p>
                </div>
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Your Message"
                required
              />
            </div>
            
            <button
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
