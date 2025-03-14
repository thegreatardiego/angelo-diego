
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Add intersection observer for sections
  useEffect(() => {
    // Preload images for better user experience
    const preloadImages = () => {
      const projectImages = [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1677442135136-760c813dce5a?q=80&w=2070&auto=format&fit=crop"
      ];
      
      projectImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
    
    // Initialize section animations
    const sections = document.querySelectorAll('.section');
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
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
