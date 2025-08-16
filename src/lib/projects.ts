export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  software: string[];
  gallery?: {
    images?: string[];
    drafting?: string[];
  };
}

export const projects: Project[] = [
    {
    id: 1,
    title: 'Swivel Bearing Design',
    category: 'Mechanical Assembly',
    description: 'Bearing housing design to allow rotational movement while supporting axial and radial loads in machinery',
    image: '/images/sb-6.jpg',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/swivel-bearing/sb-1.png',
        '/images/swivel-bearing/sb-2.jpg',
        '/images/swivel-bearing/sb-3.jpg',
        '/images/swivel-bearing/sb-4.jpg',
        '/images/swivel-bearing/sb-5.jpg',
        '/images/swivel-bearing/sb-6.jpg'
      ],
      drafting: [
        '/images/swivel-bearing/sbd-1.jpg'
      ],
    }
  },
  {
    id: 2,
    title: 'Lamborghini Alloy Design',
    category: 'Mechanical Assembly',
    description: 'Custom-designed Lamborghini alloy wheel, modeled and rendered in Fusion 360. The design is a multi-spoke forged style—modern, lightweight, and performance-oriented—commonly found on Lamborghini models like the Huracán EVO or Aventador SVJ.',
    image: '/images/a-6.png',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/lambo-alloy/a-1.png',
        '/images/lambo-alloy/a-2.jpg',
        '/images/lambo-alloy/a-3.jpg',
        '/images/lambo-alloy/a-4.jpg',
        '/images/lambo-alloy/a-6.png',
      ],
      drafting: [
        'public/images/lambo-alloy/ALLOYS Drawing v1_page-0001.jpg'
      ],
    }
  },
  {
    id: 3,
    title: 'Lamborghini Brake Design',
    category: 'Mechanical Assembly',
    description: 'Here’s a high-detail disc brake assembly inspired by Lamborghini, Modeled and Rendered entirely in Fusion 360.',
    image: '/images/d-1.png',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/lambo-brakes/d-1.jpg',
        '/images/lambo-brakes/d-2.jpg',
        '/images/lambo-brakes/d-3.jpg',
        '/images/lambo-brakes/d-4.jpg',  
        '/images/lambo-brakes/d-5.jpg'
      ],
      drafting: [
        '/images/lambo-brakes/d-1.jpg',
      ]
    }
  },
  {
    id: 4,
    title: 'Crane Hook Design',
    category: 'Mechanical Assembly',
    description: 'Lifting component for securely holding slings or ropes during heavy load handling',
    image: '/images/ch-4.jpg',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/crane-hook/ch-1.png',
        '/images/crane-hook/ch-2.jpg',
        '/images/crane-hook/ch-3.jpg',
        '/images/crane-hook/ch-4.jpg'
      ],
      drafting: [
        'public/images/crane-hook/CH ASSEMBLY Drawing v1_page-0001.jpg',
      ],
    }
  },
  {
    id: 5,
    title: 'Stuffing Box Design',
    category: 'Mechanical Assembly',
    description: 'Sealing component used to prevent leakage around a moving shaft in pumps and marine applications',
    image: '/images/sb-1.png',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/stuff-box/sb-1.png',
        '/images/stuff-box/sb-2.png',
      ],
      drafting: [
        '/images/stuff-box/STUFFING BOX ASSEMBLY Drawing v1_page-0001.jpg',
      ],
    }
  },
  {
    id: 6,
    title: 'Shock Assembly Design',
    category: 'Mechanical Assembly',
    description: 'Absorbs and dampens impact forces in mechanical systems for smoother operations',
    image: '/images/sh-1.png',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/shock-ass/sh-1.png',
        '/images/shock-ass/sh-2.png',
        '/images/shock-ass/sh-3.png',
      ],
      drafting: [
        '/images/shock-ass/ASSEMBLY Drawing v3_page-0001.jpg',
      ]
    }
  },
  {
    id: 7,
    title: 'Steam Engine Design',
    category: 'Mechanical Assembly',
    description: 'Mechanical engine model convering steam energy into reciprocating motion',
    image: '/images/se-1.png',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/steam-eng/se-1.png',
        '/images/steam-eng/se-2.png',
      ],
      drafting: [
        '/images/steam-eng/STEAM ENGINE CROSSHEAD ASSEMBLY v3_page-0001.jpg',
      ],
    }
  },
  {
    id: 8,
    title: 'Tail Stock Design',
    category: 'Mechanical Assembly',
    description: 'Lathe component supporting the free end of workpieces during machining',
    image: '/images/ts-3.jpg',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/tail-stock/ts-1.png',
        '/images/tail-stock/ts-2.jpg',
        '/images/tail-stock/ts-3.jpg',
      ],
      drafting: [
        '/images/tail-stock/TailStock Assembly Drawing v2_page-0001.jpg',
      ]
    }
  },
  {
    id: 9,
    title: 'Screw Jack Design',
    category: 'Mechanical Assembly',
    description: 'Mechanical lifting device using a screw mechanism to raise or lower heave loads',
    image: '/images/sj-1.jpg',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/screw-jack/sj-1.jpg',
        '/images/screw-jack/sj-2.jpg',
        '/images/screw-jack/sj-3.png',
        '/images/screw-jack/sj-4.png'
      ],
      drafting: [
        '/images/screw-jack/SCREW JACK ASSEMBLY DRAFTING v4_page-0001.jpg',
        '/images/screw-jack/sj-dr_page-0001.jpg'
      ]
    }
  },
  {
    id: 10,
    title: 'Non-Return Valve Design',
    category: 'Mechanical Assembly',
    description: 'Valve that permits fluid flow in one direction while preventing backflow',
    image: '/images/v-4.jpg',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/valve/v-1.png',
        '/images/valve/v-2.png',
        '/images/valve/v-3.jpg',
        '/images/valve/v-4.jpg',
        '/images/valve/v-5.png'
      ],
      drafting: [
        '/images/valve/NON RETURN VALVE ASSEMBLY Drawing v3_page-0001.jpg',
      ]
    }
  },
  {
    id: 11,
    title: 'Eccentric Assembly Design',
    category: 'Mechanical Assembly',
    description: 'Offset cam mechanism used to convert rotary motion into reciprocating motion',
    image: '/images/es-3.jpg',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/eccentric/es-1.png',
        '/images/eccentric/es-2.jpg',
        '/images/eccentric/es-3.jpg',
        '/images/eccentric/es-4.jpg',
      ],
      drafting: [
        '/images/eccentric/ECCENTRIC ASSEMBLY DRAFTING v2_page-0001.jpg',
      ]
    }
  },
  {
    id: 12,
    title: 'Drill Jig Design',
    category: 'Mechanical Assembly',
    description: 'Precision Tool guiding drills to ensure accurate hole placement in manufacturing',
    image: '/images/dj-1.png',
    software: ['Fusion 360'],
    gallery: {
      images: [
        '/images/drill/dj-1.png',
        '/images/drill/dj-2.png',
      ],
      drafting: [
        '/images/drill/DRILL JIG ASSEMLY DRAFTING v2_page-0001.jpg',
      ]
    }
  },
];

export const getProjectById = (id: number) => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};
