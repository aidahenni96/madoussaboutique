'use client';

import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaShoppingCart, FaSearch, FaChartLine, FaUsers } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Développement Web',
    description: 'Création de sites web modernes et responsifs avec les dernières technologies.',
    icon: FaCode,
  },
  {
    title: 'Applications Mobiles',
    description: 'Développement d\'applications mobiles natives et cross-platform.',
    icon: FaMobile,
  },
  {
    title: 'E-commerce',
    description: 'Solutions de commerce électronique complètes et personnalisées.',
    icon: FaShoppingCart,
  },
  {
    title: 'SEO',
    description: 'Optimisation pour les moteurs de recherche et amélioration de la visibilité.',
    icon: FaSearch,
  },
  {
    title: 'Marketing Digital',
    description: 'Stratégies de marketing digital pour augmenter votre présence en ligne.',
    icon: FaChartLine,
  },
  {
    title: 'Réseaux Sociaux',
    description: 'Gestion et optimisation de votre présence sur les réseaux sociaux.',
    icon: FaUsers,
  },
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
            Des solutions web complètes pour votre entreprise
          </p>
        </motion.div>

        {/* Boutiques en Ligne */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Boutiques en Ligne</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Création de boutiques e-commerce personnalisées</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Intégration de systèmes de paiement sécurisés</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Gestion des stocks et des commandes</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Optimisation pour le référencement (SEO)</p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Stripe</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">MongoDB</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Tailwind CSS</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Formation */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">Formation</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Formation en développement web</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Création de sites e-commerce</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Formation personnalisée selon vos besoins</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Support continu pendant la formation</p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-8 rounded-lg order-1 md:order-2"
            >
              <h3 className="text-xl font-bold mb-4">Programmes de formation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Développement Web</h4>
                  <p className="text-gray-600">HTML, CSS, JavaScript, React</p>
                </div>
                <div>
                  <h4 className="font-semibold">E-commerce</h4>
                  <p className="text-gray-600">Création de boutiques en ligne</p>
                </div>
                <div>
                  <h4 className="font-semibold">Backend</h4>
                  <p className="text-gray-600">Node.js, MongoDB, API REST</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Développement Web */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Développement Web</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Création de sites web modernes et responsifs</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Développement d'applications web</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Optimisation des performances</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <p>Maintenance et support</p>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">MongoDB</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Tailwind CSS</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
} 