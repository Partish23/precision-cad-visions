export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  video?: string;
  software: string[];
  gallery?: {
    images?: string[];
    videos?: string[];
    drafting?: string[];
    '3d-views'?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Industrial Gear Assembly',
    category: 'Mechanical Assembly',
    description: 'Complete gear train assembly with precision tolerances',
    image: '/images/Picture7.png',
    video: '/videos/gear-assembly-demo.mp4',
    software: ['SolidWorks', 'AutoCAD', 'ANSYS'],
    gallery: {
      images: [
        '/images/Picture7.png',
        '/images/Picture7.png',
        '/images/Picture7.png'
      ],
      '3d-views': [
        '/3d-views/gear-assembly-view1.png',
        '/3d-views/gear-assembly-view2.png',
        '/3d-views/gear-assembly-view3.png'
      ],
      drafting: [
        '/drafting/gear-assembly-drawing.pdf',
        '/drafting/gear-assembly-specs.pdf'
      ],
      videos: [
        '/videos/CH-ASSEMBLY.mp4',
        '/videos/gear-assembly-animation.mp4'
      ]
    }
  },
  {
    id: 2,
    title: 'Hydraulic Cylinder Design',
    category: 'Mechanical Part',
    description: 'High-pressure hydraulic cylinder with custom sealing',
    image: '/images/hydraulic-cylinder.jpg',
    video: '/videos/hydraulic-cylinder-test.mp4',
    software: ['AutoCAD', 'ANSYS'],
    gallery: {
      images: [
        '/images/Picture6.png',
        '/images/hydraulic-cylinder-2.jpg',
        '/images/hydraulic-cylinder-components.jpg'
      ],
      '3d-views': [
        '/3d-views/hydraulic-cylinder-view1.png',
        '/3d-views/hydraulic-cylinder-view2.png'
      ],
      drafting: [
        '/drafting/hydraulic-cylinder-drawing.pdf',
        '/drafting/hydraulic-cylinder-assembly.pdf'
      ],
      videos: [
        '/videos/hydraulic-cylinder-test.mp4'
      ]
    }
  },
  {
    id: 3,
    title: 'Automotive Suspension System',
    category: 'Mechanical Assembly',
    description: 'Independent suspension system for performance vehicles',
    image: '/images/suspension-system.jpg',
    video: '/videos/suspension-dynamics.mp4',
    software: ['Fusion 360', 'MATLAB'],
    gallery: {
      images: [
        '/images/suspension-system-1.jpg',
        '/images/suspension-system-2.jpg',
        '/images/suspension-components.jpg'
      ],
      '3d-views': [
        '/3d-views/suspension-view1.png',
        '/3d-views/suspension-view2.png',
        '/3d-views/suspension-view3.png'
      ],
      drafting: [
        '/drafting/suspension-assembly.pdf',
        '/drafting/suspension-parts.pdf'
      ],
      videos: [
        '/videos/suspension-dynamics.mp4',
        '/videos/suspension-testing.mp4'
      ]
    }
  },
  {
    id: 4,
    title: 'Precision Bearing Housing',
    category: 'Mechanical Part',
    description: 'Custom bearing housing with integrated lubrication system',
    image: '/images/bearing-housing.jpg',
    software: ['SolidWorks', 'AutoCAD'],
    gallery: {
      images: [
        '/images/bearing-housing-1.jpg',
        '/images/bearing-housing-2.jpg',
        '/images/bearing-housing-machined.jpg'
      ],
      '3d-views': [
        '/3d-views/bearing-housing-view1.png',
        '/3d-views/bearing-housing-view2.png'
      ],
      drafting: [
        '/drafting/bearing-housing-drawing.pdf',
        '/drafting/bearing-housing-tolerances.pdf'
      ]
    }
  },
  {
    id: 5,
    title: 'Robotic Arm Joint',
    category: 'Mechanical Assembly',
    description: 'Multi-axis robotic joint with servo integration',
    image: '/images/robotic-joint.jpg',
    video: '/videos/robotic-joint-motion.mp4',
    software: ['Fusion 360', 'Arduino IDE'],
    gallery: {
      images: [
        '/images/robotic-joint-1.jpg',
        '/images/robotic-joint-2.jpg',
        '/images/robotic-joint-servo.jpg'
      ],
      '3d-views': [
        '/3d-views/robotic-joint-view1.png',
        '/3d-views/robotic-joint-view2.png',
        '/3d-views/robotic-joint-exploded.png'
      ],
      drafting: [
        '/drafting/robotic-joint-assembly.pdf',
        '/drafting/robotic-joint-wiring.pdf'
      ],
      videos: [
        '/videos/robotic-joint-motion.mp4',
        '/videos/robotic-joint-demo.mp4'
      ]
    }
  },
  {
    id: 6,
    title: 'Custom Valve Body',
    category: 'Mechanical Part',
    description: 'High-flow valve body for industrial applications',
    image: '/images/valve-body.jpg',
    software: ['AutoCAD', 'ANSYS'],
    gallery: {
      images: [
        '/images/valve-body-1.jpg',
        '/images/valve-body-2.jpg',
        '/images/valve-body-flow-test.jpg'
      ],
      '3d-views': [
        '/3d-views/valve-body-view1.png',
        '/3d-views/valve-body-view2.png'
      ],
      drafting: [
        '/drafting/valve-body-drawing.pdf',
        '/drafting/valve-body-flow-analysis.pdf'
      ]
    }
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};
