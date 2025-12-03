export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Diseño Arquitectónico',
    description: 'Desarrollamos proyectos arquitectónicos integrales desde el concepto inicial hasta la documentación ejecutiva, adaptándonos a las necesidades específicas de cada cliente.',
    icon: 'FaRuler',
    features: [
      'Anteproyecto y concepto',
      'Proyecto ejecutivo',
      'Renders 3D fotorrealistas',
      'Planos de construcción'
    ]
  },
  {
    id: '2',
    title: 'Interiorismo',
    description: 'Creamos espacios interiores funcionales y estéticamente coherentes, con especial atención al confort, la ergonomía y el estilo personal de cada cliente.',
    icon: 'FaCouch',
    features: [
      'Distribución de espacios',
      'Selección de materiales',
      'Diseño de mobiliario',
      'Iluminación arquitectónica'
    ]
  },
  {
    id: '3',
    title: 'Dirección de Obra',
    description: 'Supervisamos la ejecución del proyecto en sitio, garantizando que la construcción se realice según especificaciones, plazos y presupuesto acordados.',
    icon: 'FaHardHat',
    features: [
      'Supervisión técnica',
      'Control de calidad',
      'Gestión de proveedores',
      'Seguimiento de presupuesto'
    ]
  },
  {
    id: '4',
    title: 'Consultoría Técnica',
    description: 'Brindamos asesoramiento especializado en temas normativos, estructurales, sustentabilidad y viabilidad de proyectos arquitectónicos.',
    icon: 'FaClipboardCheck',
    features: [
      'Estudios de factibilidad',
      'Asesoría normativa',
      'Optimización de proyectos',
      'Certificaciones sustentables'
    ]
  },
  {
    id: '5',
    title: 'Remodelaciones',
    description: 'Transformamos espacios existentes con propuestas innovadoras que mejoran la funcionalidad y el valor de tu propiedad.',
    icon: 'FaTools',
    features: [
      'Renovación integral',
      'Ampliaciones',
      'Restructuración espacial',
      'Actualización de instalaciones'
    ]
  },
  {
    id: '6',
    title: 'Arquitectura Sustentable',
    description: 'Diseñamos edificios eco-eficientes que minimizan el impacto ambiental mediante estrategias pasivas y tecnologías verdes.',
    icon: 'FaLeaf',
    features: [
      'Diseño bioclimático',
      'Eficiencia energética',
      'Uso de materiales sustentables',
      'Gestión de recursos'
    ]
  }
];
