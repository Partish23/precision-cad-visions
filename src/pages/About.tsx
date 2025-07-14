
import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import { GraduationCap, Wrench, Code, Settings } from 'lucide-react';

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

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

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Background with reduced glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c4ff0d] opacity-[0.15] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-green-400 opacity-[0.15] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#c4ff0d] opacity-[0.15] rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-[#c4ff0d]">Me</span>
            </h1>
          </div>

          {/* About Section */}
          <div className="mb-20">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-[#c4ff0d] border-opacity-30 rounded-lg p-8 mb-8 hover:border-opacity-60 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff0d]/10">
              <h2 className="text-2xl font-bold mb-6 text-[#c4ff0d]">About Myself</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate about 3D View modeling and turning ideas into precise, manufacturable products. 
                Enthusiastic about learning new tools and techniques to solve real-world engineering problems 
                and contribute to efficient, innovative solutions.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
              Educational <span className="text-[#c4ff0d]">Journey</span>
            </h2>
            
            <div ref={timelineRef} className="relative">
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Current Education */}
                <div className="timeline-item opacity-0 translate-y-8 transition-all duration-700">
                  <div className="flex items-start gap-6">
                    <div className="relative z-10 w-16 h-16 bg-[#c4ff0d] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c4ff0d]/30">
                      <GraduationCap className="text-black" size={24} />
                    </div>
                    <div className="flex-1 bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-[#c4ff0d] hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff0d]/10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#c4ff0d] font-bold text-sm">2022 – Present</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Bachelor in Mechanical Engineering</h3>
                      <p className="text-[#c4ff0d] font-medium mb-3">Goa Engineering College</p>
                      <p className="text-gray-400 text-sm">
                        Currently pursuing a degree in mechanical engineering with a focus on design and manufacturing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Diploma */}
                <div className="timeline-item opacity-0 translate-y-8 transition-all duration-700">
                  <div className="flex items-start gap-6">
                    <div className="relative z-10 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-400/30">
                      <Settings className="text-black" size={24} />
                    </div>
                    <div className="flex-1 bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-[#c4ff0d] hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff0d]/10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#c4ff0d] font-bold text-sm">2019 – 2022</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">High School Diploma in Mechanical Engineering</h3>
                      <p className="text-[#c4ff0d] font-medium mb-3">Institute Of Shipbuilding Technology</p>
                      <p className="text-gray-400 text-sm">
                        Completed technical diploma focused on machine design, manufacturing processes, and CAD fundamentals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* High School */}
                <div className="timeline-item opacity-0 translate-y-8 transition-all duration-700">
                  <div className="flex items-start gap-6">
                    <div className="relative z-10 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-400/30">
                      <GraduationCap className="text-black" size={24} />
                    </div>
                    <div className="flex-1 bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-[#c4ff0d] hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff0d]/10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#c4ff0d] font-bold text-sm">2009 – 2019</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Grade 10th</h3>
                      <p className="text-[#c4ff0d] font-medium mb-3">Regina Mundi High School</p>
                      <p className="text-gray-400 text-sm">
                        Completed foundational education with focus on mathematics and science.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Expertise */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical <span className="text-[#c4ff0d]">Expertise</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#c4ff0d] hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff0d]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-[#c4ff0d]" size={24} />
                  <h3 className="text-xl font-bold">CAD SOFTWARE</h3>
                </div>
                <div className="space-y-2">
                  {['AutoCAD', 'SolidWorks', 'Fusion 360'].map((software) => (
                    <div key={software} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#c4ff0d] rounded-full"></div>
                      <span className="text-gray-300">{software}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#c4ff0d] hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff0d]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="text-[#c4ff0d]" size={24} />
                  <h3 className="text-xl font-bold">SPECIALIZATIONS</h3>
                </div>
                <div className="space-y-2">
                  {['Product Design', 'Sheet Metal', 'Assembly Design', 'Part Design', 'Pipe Routing'].map((spec) => (
                    <div key={spec} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#c4ff0d] rounded-full"></div>
                      <span className="text-gray-300">{spec}</span>
                    </div>
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

export default About;
