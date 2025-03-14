
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  role?: string;
  date?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "EyeHelp: Mobile App for Color Blind",
      description: "A mobile application developed to assist color-blind individuals in identifying colors using Color Histogram Feature Extraction with the KNN Algorithm.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["Android Studio", "Mobile Development", "KNN Algorithm"],
      role: "Project Leader & Mobile Developer",
      date: "June 2024",
      githubUrl: "#",
    },
    {
      title: "Social Media Content Design",
      description: "Designed engaging content for Instagram, Facebook, and X, including workout tips, client transformations, and promotional materials for Bach Performance.",
      image: "https://images.unsplash.com/photo-1677442135136-760c813dce5a?q=80&w=2070&auto=format&fit=crop",
      tags: ["Graphic Design", "Social Media", "Content Creation"],
      role: "Freelance Graphic Designer",
      date: "Feb 2021 - Feb 2022",
      liveUrl: "#",
    },
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="chip bg-primary/10 text-primary mb-4">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my professional and academic projects that showcase
            my skills in software development, data analytics, and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="rounded-xl overflow-hidden shadow-md bg-card transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-500",
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  )}
                />
                <div 
                  className={cn(
                    "absolute inset-0 bg-primary/50 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300",
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  )}
                >
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-white/90 transition-colors duration-300"
                    >
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-white/90 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5 text-primary" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.date && (
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  )}
                </div>
                {project.role && (
                  <div className="text-sm text-primary font-medium mb-2">{project.role}</div>
                )}
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="chip bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
