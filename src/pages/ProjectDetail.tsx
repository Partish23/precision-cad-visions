import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, Image, Plus, Minus, X } from 'lucide-react';
import { getProjectById, Project } from '../lib/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('Images');
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const tabs = ['Images', 'Drafting'];

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

  // Close on ESC and keyboard zoom
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === '+') setZoom((z) => Math.min(4, +(z + 0.5).toFixed(2)));
      if (e.key === '-') setZoom((z) => Math.max(1, +(z - 0.5).toFixed(2)));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  const openLightbox = (src: string) => {
    setLightboxSrc(src);
    setZoom(1);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc(null);
    setZoom(1);
  };
  const handleZoomIn = () => setZoom((z) => Math.min(4, +(z + 0.5).toFixed(2)));
  const handleZoomOut = () => setZoom((z) => Math.max(1, +(z - 0.5).toFixed(2)));
  const handleToggleZoom = () => setZoom((z) => (z === 1 ? 2 : 1));
  
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
      case 'Images':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery?.images?.length ? (
              project.gallery.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => openLightbox(image)}
                  className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#c4ff0d]"
                >
                  <img src={image} alt={`${project.title} - Image ${index + 1}`} className="w-full h-full object-cover" />
                </button>
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
      case 'Drafting':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery?.drafting?.length ? (
              project.gallery.drafting.map((draft, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => openLightbox(draft)}
                  className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#c4ff0d]"
                >
                  <img src={draft} alt={`${project.title} - Drafting ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))
            ) : (
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center col-span-full">
                <div className="text-center">
                  <Image className="mx-auto mb-4 text-[#c4ff0d]" size={64} />
                  <h3 className="text-xl font-semibold mb-2">No Drafting Available</h3>
                  <p className="text-gray-400">This project does not have any drafting images.</p>
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
    <div className="min-h-screen text-white">
      <Navigation />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#101725] via-gray-900 to-[#101725]">
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

          {/* Software Used */}
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

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxSrc && (
        <div className="fixed inset-0 z-50 bg-black/90" onClick={closeLightbox}>
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} className="p-2 rounded bg-white/10 hover:bg-white/20 text-white" aria-label="Zoom out">
              <Minus size={18} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} className="p-2 rounded bg-white/10 hover:bg-white/20 text-white" aria-label="Zoom in">
              <Plus size={18} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="p-2 rounded bg-white/10 hover:bg-white/20 text-white" aria-label="Close">
              <X size={18} />
            </button>
          </div>
          <div className="h-full w-full flex items-center justify-center p-4" onClick={(e) => { e.stopPropagation(); }}>
            <div
              className={`max-h-[90vh] max-w-[95vw] ${zoom === 1 ? 'cursor-zoom-in' : 'cursor-zoom-out'}`}
              onClick={handleToggleZoom}
            >
              <img
                src={lightboxSrc}
                alt="Preview"
                className="select-none object-contain max-h-[90vh] max-w-[95vw]"
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
