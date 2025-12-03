'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendar, FaRuler, FaUser } from 'react-icons/fa';
import { notFound } from 'next/navigation';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-20 bg-white">
      {/* Header */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        
        <div className="relative h-full flex items-end pb-20 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <Link href="/proyectos">
              <motion.button
                whileHover={{ x: -5 }}
                className="mb-8 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
              >
                <FaArrowLeft />
                Volver a Proyectos
              </motion.button>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white/90 text-lg mb-4">{project.category}</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-gray-900 text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Ubicación</p>
                <p className="text-lg font-semibold text-gray-900">{project.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCalendar className="text-gray-900 text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Año</p>
                <p className="text-lg font-semibold text-gray-900">{project.year}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaRuler className="text-gray-900 text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Área</p>
                <p className="text-lg font-semibold text-gray-900">{project.area}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaUser className="text-gray-900 text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Cliente</p>
                <p className="text-lg font-semibold text-gray-900">{project.client}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sobre el Proyecto
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Este proyecto representa nuestra visión de crear espacios que no solo cumplen 
              con los requisitos funcionales, sino que también inspiran y mejoran la calidad 
              de vida de quienes los habitan. Cada detalle ha sido cuidadosamente considerado 
              para lograr un equilibrio perfecto entre forma y función.
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Galería de Imágenes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-96 overflow-hidden rounded-sm"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Interesado en un Proyecto Similar?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactanos para discutir tu próximo proyecto
          </p>
          <Link href="/contacto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Iniciar Conversación
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}
