
import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Paintbrush, 
  Layers, 
  LineChart, 
  Smartphone, 
  Shield 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Skill {
  icon: React.ElementType;
  title: string;
  description: string;
  proficiency: number;
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    {
      icon: Code,
      title: "Software Development",
      description: "Building responsive applications using modern frameworks and programming languages.",
      proficiency: 90,
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating Android applications using Android Studio with a focus on user experience.",
      proficiency: 85,
    },
    {
      icon: Paintbrush,
      title: "Graphic Design",
      description: "Designing engaging content and visuals using Adobe Photoshop and Canva.",
      proficiency: 92,
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description: "Collecting, cleaning, and visualizing data to derive actionable insights using Google Looker.",
      proficiency: 88,
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Implementing security measures and best practices for system protection.",
      proficiency: 80,
    },
    {
      icon: Layers,
      title: "Office Applications",
      description: "Microsoft Office 365 applications proficiency with MOS certifications.",
      proficiency: 95,
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
    <section id="skills" ref={sectionRef} className="section py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="chip bg-primary/10 text-primary mb-4">What I Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in software development with a focus on mobile applications and data analytics.
            Here are some of the skills I've developed through my education and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="glass rounded-xl p-6 hover-card"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground mb-4">{skill.description}</p>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%`, transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>Proficiency</span>
                <span>{skill.proficiency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
