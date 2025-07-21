
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.fade-in-element');
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c4ff0d] opacity-[0.15] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-green-400 opacity-[0.15] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#c4ff0d] opacity-[0.15] rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Name - Reduced by 25% */}
          <h1 className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            PARTISH<span className="ml-[5%]">PEDNEKAR</span>
          </h1>
          
          {/* Role */}
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 text-xl md:text-2xl text-gray-300 mb-12 font-light" style={{ animationDelay: '0.1s' }}>
            Mechanical Design Engineer
          </p>
          
          {/* Main Tagline */}
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ animationDelay: '0.2s' }}>
            <span className="text-[#c4ff0d]">Precision Engineering</span><br />
            <span className="text-[#c4ff0d]">Made Visual</span>
          </h2>
          
          {/* Supporting Text */}
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Explore a collection of 3D CAD models, detailed technical drawings, and mechanical design solutions focused on precision and functionality.
          </p>
          
          {/* CTA Buttons */}
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/projects"
              className="bg-[#c4ff0d] text-black px-8 py-4 rounded-full font-medium hover:bg-[#a8d60a] transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Projects <ChevronRight size={20} />
            </Link>
            <Link 
              to="/about"
              className="border border-[#c4ff0d] text-[#c4ff0d] px-8 py-4 rounded-full font-medium hover:bg-[#c4ff0d] hover:text-black transition-all duration-300"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 text-3xl md:text-4xl font-bold mb-12 text-center" style={{ animationDelay: '0.6s' }}>
            Featured <span className="text-[#c4ff0d]">Projects</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 group relative bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-[#c4ff0d] rounded-lg flex items-center justify-center">
                    <span className="text-[#c4ff0d] font-bold">CAD</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Project {i}</h4>
                  <p className="text-gray-400 text-sm mb-4">Mechanical Assembly Design</p>
                  <div className="flex items-center text-[#c4ff0d] text-sm group-hover:gap-2 transition-all">
                    View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c4ff0d] rounded-lg transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
