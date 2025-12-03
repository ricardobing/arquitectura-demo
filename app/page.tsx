'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { 
  FaRuler, 
  FaCouch, 
  FaHardHat, 
  FaClipboardCheck, 
  FaTools, 
  FaLeaf,
  FaArrowRight 
} from 'react-icons/fa';

const iconMap: { [key: string]: any } = {
  FaRuler,
  FaCouch,
  FaHardHat,
  FaClipboardCheck,
  FaTools,
  FaLeaf,
};

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Modern Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Diseñamos Espacios <br />que Inspiran
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Arquitectura contemporánea que transforma visiones en realidades excepcionales
            </p>
            <Link href="/proyectos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Ver Proyectos
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Proyectos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorá una selección de nuestros trabajos más destacados que demuestran 
              nuestra pasión por el diseño arquitectónico innovador
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link href={`/proyectos/${project.id}`}>
                  <div className="relative h-80 mb-4 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-semibold">{project.category}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.location} • {project.year}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Link href="/proyectos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-sm font-semibold hover:bg-gray-900 hover:text-white transition-all"
              >
                Ver Todos los Proyectos
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ofrecemos soluciones arquitectónicas integrales adaptadas a las necesidades 
                específicas de cada cliente
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-gray-900 w-16 h-16 flex items-center justify-center rounded-sm mb-6">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Link href="/servicios">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-sm font-semibold hover:bg-gray-900 hover:text-white transition-all"
                >
                  Ver Todos los Servicios
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="relative h-96 lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt="About ARCHISTUDIO"
                fill
                className="object-cover rounded-sm"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ARCHISTUDIO es un estudio de arquitectura contemporánea fundado en 2010, 
                dedicado a la creación de espacios innovadores que combinan estética, 
                funcionalidad y sostenibilidad.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro equipo multidisciplinario de arquitectos, diseñadores y consultores 
                trabaja en estrecha colaboración con cada cliente para transformar visiones 
                en proyectos arquitectónicos excepcionales.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Con más de una década de experiencia y proyectos realizados en múltiples 
                países, nos enorgullecemos de nuestra capacidad para entregar resultados 
                que superan las expectativas.
              </p>
              <Link href="/sobre-nosotros">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 text-white px-8 py-3 rounded-sm font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                >
                  Conocé Más
                  <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Tenés un Proyecto en Mente?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctanos hoy y convertí tu visión en realidad
          </p>
          <Link href="/contacto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Comenzar Proyecto
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
