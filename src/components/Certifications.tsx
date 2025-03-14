
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
      url: "https://drive.google.com/file/d/1SWlSZE2AIMSlhOf2M2qmMnziurCZQ_kf/view?usp=sharing"
    },
    {
      title: "Business Intelligence Foundation Professional Certification",
      issuer: "Certiprof",
      url: "https://drive.google.com/file/d/178RajC8UycVe8VJ-GwoIkez9Xgc5FQgt/view?usp=sharing"
    },
    {
      title: "Microsoft Office Specialist: Word Associate (365 Apps)",
      issuer: "Microsoft",
      url: "https://drive.google.com/file/d/1GTB2zvWyNB_K5D7IYeu4TjBVGO06AnwK/view?usp=drive_link"
    },
    {
      title: "Microsoft Office Specialist: PowerPoint Associate (365 Apps)",
      issuer: "Microsoft",
      url: "https://drive.google.com/file/d/1tt7qVLse98Q6HpkFxFo6FYK6ymevqV3H/view?usp=drive_link"
    },
    {
      title: "Microsoft Office Specialist: Excel Associate (365 Apps)",
      issuer: "Microsoft",
      url: "https://drive.google.com/file/d/1Kfyxmqr5PhN96nDNubJr0JQGxL5SuLnb/view?usp=sharing"
    },
    {
      title: "ITS – Network Security",
      issuer: "Certiport",
      url: "https://drive.google.com/file/d/1ugXhq2yCh7VC7UC_Jzh83WvWGTJZt-ZV/view?usp=drive_link"
    },
    {
      title: "Cisco Certified Support Technician - Cybersecurity",
      issuer: "Certiport",
      url: "https://drive.google.com/file/d/1InYs7bYr9oqKosfOA8ryLT-6LV-ef8iH/view?usp=drive_link"
    },
    {
      title: "Google AI Essentials",
      issuer: "Coursera",
      url: "https://drive.google.com/file/d/1Si7K5dFa8OpTODN_WSAZGJoBl_Dr52by/view?usp=drive_link"
    },
    {
      title: "Smart Technopreneurship 101",
      issuer: "TESDA",
      url: "https://drive.google.com/file/d/1S5T1EEI1tLUoD3DOejJ3Az2pknFm4rnO/view?usp=sharing"
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
