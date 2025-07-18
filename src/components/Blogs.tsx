import React from "react";
import BlurText from "./BlurText";
import FadeContent from './ui/FadeContent'


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


const Blogs = () => {
  const blogs = [
    {
      title: 'Understanding React Hooks',
      description: 'A deep dive into React Hooks, exploring useState, useEffect, and custom hooks.',
      date: '2023-10-01',
      link: 'https://example.com/react-hooks'
    },
    {
      title: 'Building Responsive Web Apps with Tailwind CSS',
      description: 'Learn how to create responsive designs using Tailwind CSS in your web applications.',
      date: '2023-09-15',
      link: 'https://example.com/tailwind-css'
    },
    {
      title: 'JavaScript ES6 Features You Should Know',
      description: 'An overview of essential ES6 features that every JavaScript developer should be familiar with.',
      date: '2023-08-20',
      link: 'https://example.com/es6-features'
    }
  ];

  return (
    <section className="py-20 px-4" id="blogs">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-16">
        <BlurText
            text="Latest Blogs"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl md:text-6xl font-bold text-center mb-16 text-salil-sky"
          />
          </div>
        <div className="grid md:grid-cols-2 gap-8 -z-50" style={{ position: 'relative', zIndex: 10 }}>
          {blogs.map((blog) => (
            <div key={blog.title} className="bg-gray-800/50 rounded-xl p-6  transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-400 mb-4">{blog.description}</p>
              <span className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</span>
              <div className="mt-4">
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 flex items-center">
                  Read More 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Blogs;