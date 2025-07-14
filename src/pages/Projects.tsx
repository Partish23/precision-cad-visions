
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { ChevronRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Mechanical Assembly', 'Mechanical Part'];
  
  const projects = [
    {
      id: 1,
      title: 'Industrial Gear Assembly',
      category: 'Mechanical Assembly',
      description: 'Complete gear train assembly with precision tolerances',
      image: '/api/placeholder/400/300',
      tags: ['SolidWorks', 'Assembly', 'Gears']
    },
    {
      id: 2,
      title: 'Hydraulic Cylinder Design',
      category: 'Mechanical Part',
      description: 'High-pressure hydraulic cylinder with custom sealing',
      image: '/api/placeholder/400/300',
      tags: ['AutoCAD', 'Hydraulics', 'Manufacturing']
    },
    {
      id: 3,
      title: 'Automotive Suspension System',
      category: 'Mechanical Assembly',
      description: 'Independent suspension system for performance vehicles',
      image: '/api/placeholder/400/300',
      tags: ['Fusion 360', 'Automotive', 'Dynamics']
    },
    {
      id: 4,
      title: 'Precision Bearing Housing',
      category: 'Mechanical Part',
      description: 'Custom bearing housing with integrated lubrication system',
      image: '/api/placeholder/400/300',
      tags: ['SolidWorks', 'Precision', 'Machining']
    },
    {
      id: 5,
      title: 'Robotic Arm Joint',
      category: 'Mechanical Assembly',
      description: 'Multi-axis robotic joint with servo integration',
      image: '/api/placeholder/400/300',
      tags: ['Fusion 360', 'Robotics', 'Automation']
    },
    {
      id: 6,
      title: 'Custom Valve Body',
      category: 'Mechanical Part',
      description: 'High-flow valve body for industrial applications',
      image: '/api/placeholder/400/300',
      tags: ['AutoCAD', 'Fluid Systems', 'Industrial']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c4ff0d] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-400 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="text-[#c4ff0d]">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of precision engineering and innovative mechanical design solutions
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-1 bg-gray-900 rounded-full p-1 border border-gray-700">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-[#c4ff0d] text-black'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-[#c4ff0d] hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center relative overflow-hidden">
                  <div className="w-20 h-20 border-2 border-[#c4ff0d] rounded-lg flex items-center justify-center">
                    <span className="text-[#c4ff0d] font-bold text-lg">CAD</span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/project/${project.id}`}
                      className="bg-[#c4ff0d] text-black px-6 py-2 rounded-full font-medium hover:bg-[#a8d60a] transition-colors flex items-center gap-2"
                    >
                      View Details <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-[#c4ff0d] bg-[#c4ff0d] bg-opacity-20 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#c4ff0d] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-[#c4ff0d] hover:text-white transition-colors font-medium group-hover:gap-3"
                  >
                    View Project <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Filter className="mx-auto mb-4 text-gray-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-400">Try selecting a different filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
