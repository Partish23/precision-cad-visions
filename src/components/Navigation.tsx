
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex items-center space-x-8">
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-[#c4ff0d] ${
              location.pathname === '/' ? 'text-[#c4ff0d]' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-[#c4ff0d] ${
              location.pathname === '/about' ? 'text-[#c4ff0d]' : 'text-white'
            }`}
          >
            About Me
          </Link>
          <Link 
            to="/projects" 
            className={`text-sm font-medium transition-colors hover:text-[#c4ff0d] ${
              location.pathname === '/projects' ? 'text-[#c4ff0d]' : 'text-white'
            }`}
          >
            Featured Projects
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/partish-pednekar-391229260" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#c4ff0d] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:partish2331@gmail.com"
            className="text-white hover:text-[#c4ff0d] transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
