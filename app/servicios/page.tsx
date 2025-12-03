'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { services } from '@/data/services';
import { 
  FaRuler, 
  FaCouch, 
  FaHardHat, 
  FaClipboardCheck, 
  FaTools, 
  FaLeaf,
  FaCheck
} from 'react-icons/fa';

const iconMap: { [key: string]: any } = {
  FaRuler,
  FaCouch,
  FaHardHat,
  FaClipboardCheck,
  FaTools,
  FaLeaf,
};

export default function ServiciosPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <main className="pt-20 bg-white">
      {/* Header */}
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
            alt="Servicios"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Soluciones arquitectónicas integrales para cada etapa de tu proyecto
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bg-white"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                  <div className="flex-1">
                    <div className="bg-gray-900 w-20 h-20 flex items-center justify-center rounded-sm mb-6">
                      <IconComponent className="text-white text-3xl" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheck className="text-gray-900 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-b border-gray-200 mt-12" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un enfoque estructurado que garantiza resultados excepcionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consulta Inicial',
                description: 'Entendemos tu visión, necesidades y objetivos del proyecto'
              },
              {
                step: '02',
                title: 'Conceptualización',
                description: 'Desarrollamos conceptos creativos y propuestas de diseño'
              },
              {
                step: '03',
                title: 'Desarrollo',
                description: 'Refinamos el diseño con planos detallados y especificaciones'
              },
              {
                step: '04',
                title: 'Ejecución',
                description: 'Supervisamos la construcción para asegurar calidad'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-gray-200 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Comenzar tu Proyecto?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactanos para una consulta gratuita y descubrí cómo podemos ayudarte
          </p>
          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Solicitar Consulta
          </motion.a>
        </div>
      </section>
    </main>
  );
}
