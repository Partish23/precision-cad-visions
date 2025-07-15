export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  video?: string;
  tags: string[];
  software: string[];
  specifications: { [key: string]: string };
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
    longDescription: 'This industrial gear assembly represents a complete solution for power transmission in heavy machinery applications. The design incorporates advanced geometric modeling techniques, stress analysis optimization, and manufacturing-ready specifications.',
    image: '/images/Picture7.png',
    video: '/videos/gear-assembly-demo.mp4',
    tags: ['SolidWorks', 'Assembly', 'Gears'],
    software: ['SolidWorks', 'AutoCAD', 'ANSYS'],
    specifications: {
      'Gear Ratio': '4:1 Reduction',
      'Torque Capacity': '2500 Nm',
      'Material': 'AISI 4140 Steel',
      'Precision Grade': 'DIN 6 Quality'
    },
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
        '/videos/gear-assembly-demo.mp4',
        '/videos/gear-assembly-animation.mp4'
      ]
    }
  },
  {
    id: 2,
    title: 'Hydraulic Cylinder Design',
    category: 'Mechanical Part',
    description: 'High-pressure hydraulic cylinder with custom sealing',
    longDescription: 'This project involved the design and analysis of a high-pressure hydraulic cylinder for industrial automation. It features a custom sealing solution to prevent leakage under extreme pressures and a robust construction for long service life.',
    image: '/images/hydraulic-cylinder.jpg',
    video: '/videos/hydraulic-cylinder-test.mp4',
    tags: ['AutoCAD', 'Hydraulics', 'Manufacturing'],
    software: ['AutoCAD', 'ANSYS'],
    specifications: {
      'Pressure Rating': '350 bar',
      'Bore Diameter': '100 mm',
      'Stroke Length': '500 mm',
      'Sealing': 'Custom PTFE composite'
    },
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
    longDescription: 'This project features a double-wishbone suspension system designed for high-performance automotive applications. It includes detailed kinematic analysis and component design for optimal handling and ride comfort.',
    image: '/images/suspension-system.jpg',
    video: '/videos/suspension-dynamics.mp4',
    tags: ['Fusion 360', 'Automotive', 'Dynamics'],
    software: ['Fusion 360', 'MATLAB'],
    specifications: {
      'Type': 'Double Wishbone',
      'Travel': '150 mm',
      'Camber Gain': '-2 degrees',
      'Material': '7075-T6 Aluminum'
    },
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
    longDescription: 'This project involved the design of a precision bearing housing that integrates a lubrication system for enhanced performance and longevity. The housing is optimized for minimal friction and maximum load-bearing capacity.',
    image: '/images/bearing-housing.jpg',
    tags: ['SolidWorks', 'Precision', 'Machining'],
    software: ['SolidWorks', 'AutoCAD'],
    specifications: {
      'Inner Diameter': '50 mm',
      'Outer Diameter': '80 mm',
      'Width': '40 mm',
      'Material': 'Cast Iron'
    },
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
    longDescription: 'This project showcases a multi-axis robotic joint designed for automation and robotics applications. It features integrated servo motors, a compact design, and high-strength materials for precision and reliability.',
    image: '/images/robotic-joint.jpg',
    video: '/videos/robotic-joint-motion.mp4',
    tags: ['Fusion 360', 'Robotics', 'Automation'],
    software: ['Fusion 360', 'Arduino IDE'],
    specifications: {
      'Axes': '3 (Pitch, Yaw, Roll)',
      'Payload': '5 kg',
      'Reach': '500 mm',
      'Control': 'Servo-driven'
    },
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
    longDescription: 'The custom valve body is designed for high-flow applications in industrial settings. It features precise machining and the ability to withstand high pressures and temperatures.',
    image: '/images/valve-body.jpg',
    tags: ['AutoCAD', 'Fluid Systems', 'Industrial'],
    software: ['AutoCAD', 'ANSYS'],
    specifications: {
      'Connection Type': 'Flanged',
      'Size': '150 mm',
      'Pressure Class': 'PN16',
      'Material': 'Ductile Iron'
    },
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
