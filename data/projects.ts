export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  images: string[];
  area: string;
  client: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Casa Minimalista en las Colinas',
    category: 'Residencial',
    location: 'Los Ángeles, CA',
    year: '2024',
    description: 'Una residencia contemporánea que integra diseño minimalista con funcionalidad moderna. La estructura de hormigón expuesto se combina con grandes ventanales que invitan a la luz natural.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'
    ],
    area: '350 m²',
    client: 'Privado'
  },
  {
    id: '2',
    title: 'Edificio de Oficinas Corporativas',
    category: 'Comercial',
    location: 'Nueva York, NY',
    year: '2023',
    description: 'Torre corporativa de 15 pisos con fachada de vidrio y acero. Diseño sustentable con certificación LEED Gold, espacios de trabajo flexibles y áreas comunes inspiradoras.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'
    ],
    area: '8,500 m²',
    client: 'Tech Corp International'
  },
  {
    id: '3',
    title: 'Residencia Urbana Contemporánea',
    category: 'Residencial',
    location: 'Miami, FL',
    year: '2024',
    description: 'Vivienda unifamiliar en contexto urbano. Volúmenes puros en hormigón y madera natural crean una composición armoniosa que dialoga con su entorno.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'
    ],
    area: '420 m²',
    client: 'Familia Rodriguez'
  },
  {
    id: '4',
    title: 'Centro Cultural y Biblioteca',
    category: 'Público',
    location: 'Chicago, IL',
    year: '2023',
    description: 'Espacio público que se convierte en el nuevo corazón cultural del barrio. Arquitectura transparente que invita a la comunidad a participar.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1200&q=80',
      'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1200&q=80'
    ],
    area: '2,800 m²',
    client: 'Municipalidad de Chicago'
  },
  {
    id: '5',
    title: 'Complejo Residencial Sustentable',
    category: 'Residencial',
    location: 'Portland, OR',
    year: '2024',
    description: 'Desarrollo habitacional de 48 unidades con enfoque en sustentabilidad. Paneles solares, recolección de agua de lluvia y jardines comunitarios.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80'
    ],
    area: '5,200 m²',
    client: 'Green Living Development'
  },
  {
    id: '6',
    title: 'Pabellón de Exposiciones',
    category: 'Comercial',
    location: 'San Francisco, CA',
    year: '2023',
    description: 'Estructura temporal para exposición de arte contemporáneo. Diseño modular que permite múltiples configuraciones espaciales.',
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80'
    ],
    area: '1,200 m²',
    client: 'SF Art Foundation'
  }
];
