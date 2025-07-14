
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, Download, ExternalLink, Play, Image, FileText, Box } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('3D View');
  
  const tabs = ['3D View', 'Images', 'Video', 'Drafting'];
  
  // Mock project data - in a real app, you'd fetch this based on the ID
  const project = {
    id: 1,
    title: 'Industrial Gear Assembly',
    category: 'Mechanical Assembly',
    description: 'A comprehensive gear train assembly designed for high-torque industrial applications. This project showcases precision engineering with custom gear ratios, bearing integration, and optimized material selection for maximum efficiency and durability.',
    longDescription: 'This industrial gear assembly represents a complete solution for power transmission in heavy machinery applications. The design incorporates advanced geometric modeling techniques, stress analysis optimization, and manufacturing-ready specifications. Each component has been carefully designed to meet strict tolerance requirements while maintaining cost-effective production methods.',
    software: ['SolidWorks', 'AutoCAD', 'ANSYS'],
    tags: ['Assembly Design', 'Gear Systems', 'Industrial', 'Manufacturing'],
    specifications: {
      'Gear Ratio': '4:1 Reduction',
      'Torque Capacity': '2500 Nm',
      'Material': 'AISI 4140 Steel',
      'Precision Grade': 'DIN 6 Quality'
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case '3D View':
        return (
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Box className="mx-auto mb-4 text-[#c4ff0d]" size={64} />
              <h3 className="text-xl font-semibold mb-2">3D CAD Model</h3>
              <p className="text-gray-400">Interactive 3D model would be embedded here</p>
            </div>
          </div>
        );
      case 'Images':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Image className="mx-auto mb-2 text-[#c4ff0d]" size={32} />
                  <p className="text-gray-400 text-sm">Technical Drawing {i}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Video':
        return (
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#c4ff0d] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Play className="text-black ml-1" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Assembly Animation</h3>
              <p className="text-gray-400">Step-by-step assembly process video</p>
            </div>
          </div>
        );
      case 'Drafting':
        return (
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FileText className="mx-auto mb-4 text-[#c4ff0d]" size={64} />
              <h3 className="text-xl font-semibold mb-2">Technical Drawings</h3>
              <p className="text-gray-400">Detailed engineering drawings and specifications</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c4ff0d] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-[#c4ff0d] hover:text-white transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-[#c4ff0d] bg-[#c4ff0d] bg-opacity-20 px-3 py-1 rounded">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-400 max-w-4xl leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#c4ff0d] text-black px-6 py-3 rounded-full font-medium hover:bg-[#a8d60a] transition-colors flex items-center gap-2">
                <Download size={20} />
                Download Files
              </button>
              <button className="border border-[#c4ff0d] text-[#c4ff0d] px-6 py-3 rounded-full font-medium hover:bg-[#c4ff0d] hover:text-black transition-all duration-300 flex items-center gap-2">
                <ExternalLink size={20} />
                View Live Demo
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 border-b border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium transition-all duration-300 border-b-2 ${
                    activeTab === tab
                      ? 'text-[#c4ff0d] border-[#c4ff0d]'
                      : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-12">
            {renderTabContent()}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Project Details</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>
              
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6">
                <div className="space-y-4">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-400">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="font-bold mb-4">Software Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.software.map((software) => (
                    <span
                      key={software}
                      className="text-sm bg-[#c4ff0d] bg-opacity-20 text-[#c4ff0d] px-3 py-1 rounded-full"
                    >
                      {software}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
