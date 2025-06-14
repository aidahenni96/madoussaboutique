'use client';

import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaShoppingCart, FaSearch, FaChartLine, FaUsers } from 'react-icons/fa';

const services = [
  {
    title: 'Boutiques en Ligne',
    description: 'Création de boutiques e-commerce professionnelles et personnalisées.',
    features: [
      'Design moderne et responsive',
      'Intégration des moyens de paiement',
      'Gestion des stocks et commandes',
      'Tableau de bord administrateur',
      'Optimisation SEO',
      'Support technique'
    ],
    icon: FaShoppingCart,
    color: 'blue'
  },
  {
    title: 'Formation Web',
    description: 'Formation complète en développement web et création de boutiques en ligne.',
    features: [
      'HTML, CSS, JavaScript',
      'React et Next.js',
      'Backend avec Node.js',
      'Bases de données',
      'Déploiement',
      'Projet pratique'
    ],
    icon: FaCode,
    color: 'purple'
  },
  {
    title: 'Accompagnement',
    description: 'Support personnalisé pour votre projet digital.',
    features: [
      'Consultation initiale',
      'Plan de développement',
      'Suivi régulier',
      'Formation à l\'utilisation',
      'Maintenance',
      'Support continu'
    ],
    icon: FaUsers,
    color: 'green'
  }
];

export default function Services() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mes Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour votre présence en ligne
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`bg-${service.color}-100 p-6`}>
                <div className={`w-12 h-12 bg-${service.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon size={24} color="white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className={`text-${service.color}-600 mr-2`}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full bg-${service.color}-600 text-white py-3 rounded-lg hover:bg-${service.color}-700 transition`}>
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 