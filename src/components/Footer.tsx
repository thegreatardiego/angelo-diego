
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import DownloadButton from './ui/DownloadButton';

const Footer = () => {
  // Social media links
  const socialLinks = [
    { icon: Github, url: 'https://github.com/yourusername' },
    { icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
    { icon: Twitter, url: 'https://twitter.com/yourusername' },
    { icon: Instagram, url: 'https://instagram.com/yourusername' },
  ];

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and about */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Your Name</h3>
            <p className="text-white/80 mb-6">
              Creating beautiful digital experiences through thoughtful design and clean code.
            </p>
            <DownloadButton
              label="Download CV"
              fileName="your-cv.pdf"
              fileUrl="/your-cv.pdf"
              className="!bg-white !text-primary hover:!bg-white/90"
            />
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-white/80">
                <span className="block">Email:</span>
                <a href="mailto:your.email@example.com" className="hover:text-white transition-colors duration-300">
                  your.email@example.com
                </a>
              </li>
              <li className="text-white/80">
                <span className="block">Phone:</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-white/80">
                <span className="block">Location:</span>
                <span>New York City, NY, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social media and copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-white/60 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
