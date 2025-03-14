
import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Paintbrush, 
  Layers, 
  LineChart, 
  Smartphone, 
  Server 
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
      title: "Web Development",
      description: "Building responsive and performant websites using modern frameworks and tools.",
      proficiency: 90,
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
      proficiency: 85,
    },
    {
      icon: Layers,
      title: "Frontend Development",
      description: "Implementing interactive user interfaces with React, Vue, and other modern frameworks.",
      proficiency: 92,
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js, Express, and databases.",
      proficiency: 80,
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Developing cross-platform mobile apps using React Native and Flutter.",
      proficiency: 75,
    },
    {
      icon: LineChart,
      title: "Data Visualization",
      description: "Creating interactive charts and dashboards to represent complex data clearly.",
      proficiency: 82,
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
            I specialize in creating digital experiences that are both beautiful and functional.
            Here are some of the skills I've mastered over the years.
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
