import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, Download, ExternalLink, Play, Image, FileText, Box } from 'lucide-react';
import { getProjectById, Project } from '../lib/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('3D View');
  
  const tabs = ['3D View', 'Images', 'Video', 'Drafting'];

  useEffect(() => {
    if (id) {
      const projectId = parseInt(id, 10);
      const foundProject = getProjectById(projectId);
      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate('/notfound');
      }
    }
  }, [id, navigate]);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p>Loading project...</p>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case '3D View':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery?.['3d-views']?.length ? (
              project.gallery['3d-views'].map((view, index) => (
                <div key={index} className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden">
                  <img src={view} alt={`${project.title} - 3D View ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))
            ) : (
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center col-span-full">
                <div className="text-center">
                  <Box className="mx-auto mb-4 text-[#c4ff0d]" size={64} />
                  <h3 className="text-xl font-semibold mb-2">No 3D Views Available</h3>
                  <p className="text-gray-400">This project does not have any 3D views in the gallery.</p>
                </div>
              </div>
            )}
          </div>
        );
      case 'Images':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery?.images?.length ? (
              project.gallery.images.map((image, index) => (
                <div key={index} className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden">
                  <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))
            ) : (
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center col-span-full">
                <div className="text-center">
                  <Image className="mx-auto mb-4 text-[#c4ff0d]" size={64} />
                  <h3 className="text-xl font-semibold mb-2">No Images Available</h3>
                  <p className="text-gray-400">This project does not have any images in the gallery.</p>
                </div>
              </div>
            )}
          </div>
        );
      case 'Video':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery?.videos?.length ? (
              project.gallery.videos.map((video, index) => (
                <div key={index} className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden">
                  <video controls src={video} className="w-full h-full object-cover" />
                </div>
              ))
            ) : (
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center col-span-full">
                <div className="text-center">
                  <Play className="mx-auto mb-4 text-[#c4ff0d]" size={64} />
                  <h3 className="text-xl font-semibold mb-2">No Videos Available</h3>
                  <p className="text-gray-400">This project does not have any videos in the gallery.</p>
                </div>
              </div>
            )}
          </div>
        );
      case 'Drafting':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery?.drafting?.length ? (
              project.gallery.drafting.map((doc, index) => (
                <div key={index} className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="mx-auto mb-4 text-[#c4ff0d]" size={64} />
                    <h3 className="text-xl font-semibold mb-2">Drafting Document</h3>
                    <a href={doc} target="_blank" rel="noopener noreferrer" className="text-[#c4ff0d] hover:underline">
                      View Document {index + 1}
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center col-span-full">
                <div className="text-center">
                  <FileText className="mx-auto mb-4 text-[#c4ff0d]" size={64} />
                  <h3 className="text-xl font-semibold mb-2">No Drafting Documents Available</h3>
                  <p className="text-gray-400">This project does not have any drafting documents in the gallery.</p>
                </div>
              </div>
            )}
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
              <h2 className="text-2xl font-bold mb-6"></h2>
              <p className="text-gray-300 leading-relaxed mb-6">
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
              </div>
            </div>

            {/* Specifications */}
            <div>
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
