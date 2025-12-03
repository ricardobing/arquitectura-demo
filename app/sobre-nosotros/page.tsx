'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAward, FaUsers, FaGlobeAmericas, FaLightbulb } from 'react-icons/fa';

export default function SobreNosotrosPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { number: '150+', label: 'Proyectos Completados', icon: FaAward },
    { number: '25+', label: 'Profesionales', icon: FaUsers },
    { number: '15+', label: 'Años de Experiencia', icon: FaLightbulb },
    { number: '10+', label: 'Países', icon: FaGlobeAmericas },
  ];

  const team = [
    {
      name: 'María González',
      role: 'Directora Fundadora',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      bio: 'Arquitecta con más de 20 años de experiencia en diseño residencial y comercial.'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director de Diseño',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      bio: 'Especialista en arquitectura sustentable y diseño bioclimático.'
    },
    {
      name: 'Ana Martínez',
      role: 'Directora de Proyectos',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80',
      bio: 'Experta en gestión de proyectos complejos y dirección de obra.'
    },
    {
      name: 'Jorge López',
      role: 'Director de Interiorismo',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      bio: 'Diseñador de interiores con enfoque en espacios comerciales contemporáneos.'
    }
  ];

  return (
    <main className="pt-20 bg-white">
      {/* Header */}
      <section className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80"
            alt="Sobre Nosotros"
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
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Creando espacios excepcionales desde 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              ARCHISTUDIO nació en 2010 con una visión clara: transformar la manera en que 
              las personas experimentan los espacios arquitectónicos. Desde nuestros humildes 
              comienzos como un pequeño estudio boutique, hemos crecido hasta convertirnos en 
              un referente de diseño arquitectónico innovador.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro enfoque siempre ha sido el mismo: escuchar atentamente a nuestros clientes, 
              comprender sus necesidades únicas y crear soluciones arquitectónicas que no solo 
              cumplan, sino que superen sus expectativas.
            </p>
            <p className="text-lg text-gray-600">
              Hoy, con más de 150 proyectos completados en múltiples países, continuamos 
              comprometidos con la excelencia en cada detalle, manteniendo nuestra pasión por 
              el diseño y la innovación que nos inspiró desde el primer día.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=1200&q=80"
              alt="Our Story"
              fill
              className="object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-4xl mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Valores
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Los principios que guían cada proyecto que emprendemos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Innovación',
              description: 'Buscamos constantemente nuevas formas de resolver desafíos arquitectónicos, integrando tecnología y creatividad.'
            },
            {
              title: 'Sustentabilidad',
              description: 'Diseñamos con conciencia ambiental, minimizando el impacto ecológico y maximizando la eficiencia energética.'
            },
            {
              title: 'Excelencia',
              description: 'Nos comprometemos con los más altos estándares de calidad en cada fase del proyecto, desde el concepto hasta la entrega.'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
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
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conocé a los profesionales que hacen posible cada proyecto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Estamos listos para transformar tu visión en realidad
          </p>
          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Contáctanos
          </motion.a>
        </div>
      </section>
    </main>
  );
}
