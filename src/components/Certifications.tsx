
import React, { useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Certification {
  title: string;
  issuer: string;
  url: string;
}

const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const certifications: Certification[] = [
    {
      title: "ITS - Cybersecurity",
      issuer: "Certiport",
      url: "https://certiport.pearsonvue.com/Certifications/IT-Specialist/Certification/Cybersecurity"
    },
    {
      title: "Business Intelligence Foundation Professional Certification",
      issuer: "Certiprof",
      url: "https://certiprof.com/pages/business-intelligence-foundation-professional-certificate-bifpc"
    },
    {
      title: "Microsoft Office Specialist: Word Associate (365 Apps)",
      issuer: "Microsoft",
      url: "https://learn.microsoft.com/en-us/certifications/microsoft-office-specialist-word-associate-365-apps/"
    },
    {
      title: "Microsoft Office Specialist: PowerPoint Associate (365 Apps)",
      issuer: "Microsoft",
      url: "https://learn.microsoft.com/en-us/certifications/microsoft-office-specialist-powerpoint-associate-365-apps/"
    },
    {
      title: "Microsoft Office Specialist: Excel Associate (365 Apps)",
      issuer: "Microsoft",
      url: "https://learn.microsoft.com/en-us/certifications/microsoft-office-specialist-excel-associate-365-apps/"
    },
    {
      title: "ITS – Network Security",
      issuer: "Certiport",
      url: "https://certiport.pearsonvue.com/Certifications/IT-Specialist/Certification/Security"
    },
    {
      title: "Cisco Certified Support Technician - Cybersecurity",
      issuer: "Certiport",
      url: "https://www.cisco.com/c/en/us/training-events/training-certifications/exams/current-list/ccst-cyber.html"
    },
    {
      title: "Google AI Essentials",
      issuer: "Coursera",
      url: "https://www.coursera.org/professional-certificates/google-ai-essentials"
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
            <a 
              key={cert.title}
              href={cert.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="glass rounded-xl p-6 hover-card flex flex-col items-center text-center transition-transform hover:scale-105"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full inline-block">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                {cert.title}
                <ExternalLink className="h-4 w-4 text-primary/70" />
              </h3>
              <p className="text-muted-foreground text-sm">Issued by {cert.issuer}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
