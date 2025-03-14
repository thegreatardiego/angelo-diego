
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [jobIndex, setJobIndex] = useState(0);
  
  const jobTitles = [
    "Software Developer",
    "Data Analyst",
    "Graphic Designer",
    "IT Specialist"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Set up the job title rotation
    const intervalId = setInterval(() => {
      setJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 2000);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(intervalId);
    };
  }, []);

  const handleScrollDown = () => {
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      window.scrollTo({
        top: skillsSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="section min-h-screen flex flex-col justify-center items-center relative px-6 py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4 inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="chip bg-secondary text-secondary-foreground">Hello, I'm</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="block">Angelo Diego</span>
          <span className="text-muted-foreground block mt-2 h-12">
            <span className="transition-opacity duration-300">{jobTitles[jobIndex]}</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          I'm a passionate software developer with a focus on mobile development and data analytics.
          Based in Orion, Bataan, I specialize in creating functional digital experiences with clean code.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#projects" 
            className="btn-hover px-8 py-3 bg-primary text-white rounded-md font-medium transition-all duration-300 hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#projects');
              if (target) {
                window.scrollTo({
                  top: target.getBoundingClientRect().top + window.scrollY - 80,
                  behavior: 'smooth',
                });
              }
            }}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="btn-hover px-8 py-3 border border-primary text-primary rounded-md font-medium transition-all duration-300 hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#contact');
              if (target) {
                window.scrollTo({
                  top: target.getBoundingClientRect().top + window.scrollY - 80,
                  behavior: 'smooth',
                });
              }
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={handleScrollDown}
      >
        <ArrowDown className="text-primary opacity-75 hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Background elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
