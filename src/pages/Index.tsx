
import React from 'react';
import Navigation from '../components/Navigation';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c4ff0d] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-green-400 opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            PARTISH PEDNEKAR
          </h1>
          
          {/* Role */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Mechanical Design Engineer
          </p>
          
          {/* Main Tagline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Precision Engineering<br />
            <span className="text-[#c4ff0d]">Made Visual</span>
          </h2>
          
          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore a collection of 3D CAD models, detailed technical drawings, and mechanical design solutions focused on precision and functionality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/projects"
              className="group bg-[#c4ff0d] text-black px-8 py-4 rounded-full font-medium hover:bg-[#a8d60a] transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <ArrowDown size={24} />
      </div>

      {/* Featured Projects Preview */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-[#c4ff0d]">Projects</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
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
          
          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-[#c4ff0d] hover:text-white transition-colors font-medium"
            >
              View All Projects <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
