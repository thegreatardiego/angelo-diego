
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import DownloadButton from './ui/DownloadButton';

const Footer = () => {
  // Social media links
  const socialLinks = [
    { icon: Github, url: 'https://github.com/thegreatardiego' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/angelo-diego-963335165/' },
    { icon: Twitter, url: 'https://x.com/thegreatardiego' },
    { icon: Instagram, url: 'https://instagram.com/thegreatardiego' },
  ];

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and about */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Angelo Diego</h3>
            <p className="text-white/80 mb-6">
              Software developer specializing in mobile development and data analytics, creating functional digital experiences with clean code.
            </p>
            <DownloadButton
              label="Download CV"
              fileName="angelo-diego-cv.pdf"
              fileUrl="/angelo-diego-cv.pdf"
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
                <a href="mailto:ardiego.2001@gmail.com" className="hover:text-white transition-colors duration-300">
                  ardiego.2001@gmail.com
                </a>
              </li>
              <li className="text-white/80">
                <span className="block">Phone:</span>
                <a href="tel:+639457747843" className="hover:text-white transition-colors duration-300">
                  +63 945 774 7843
                </a>
              </li>
              <li className="text-white/80">
                <span className="block">Location:</span>
                <span>Orion 2102, Bataan, Philippines</span>
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
            © {currentYear} Angelo Diego. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
