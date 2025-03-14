
import React, { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Certification {
  title: string;
  issuer: string;
}

const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const certifications: Certification[] = [
    {
      title: "ITS - Cybersecurity",
      issuer: "Certiport",
    },
    {
      title: "Business Intelligence Foundation Professional Certification",
      issuer: "Certiprof",
    },
    {
      title: "Microsoft Office Specialist: Word Associate (365 Apps)",
      issuer: "Microsoft",
    },
    {
      title: "Microsoft Office Specialist: PowerPoint Associate (365 Apps)",
      issuer: "Microsoft",
    },
    {
      title: "Microsoft Office Specialist: Excel Associate (365 Apps)",
      issuer: "Microsoft",
    },
    {
      title: "ITS – Network Security",
      issuer: "Certiport",
    },
    {
      title: "Cisco Certified Support Technician - Cybersecurity",
      issuer: "Certiport",
    },
    {
      title: "Google AI Essentials",
      issuer: "Coursera",
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
    <section id="certifications" ref={sectionRef} className="section py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="chip bg-primary/10 text-primary mb-4">My Credentials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that demonstrate my technical expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="glass rounded-xl p-6 hover-card flex flex-col items-center text-center"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full inline-block">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">Issued by {cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
