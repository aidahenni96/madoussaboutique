'use client';

import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaReact, FaServer } from 'react-icons/fa';

const formations = [
  {
    title: 'Développement Front-end',
    icon: FaCode,
    description: 'Maîtrisez les fondamentaux du développement web front-end',
    modules: [
      'HTML5 et CSS3 avancés',
      'JavaScript moderne (ES6+)',
      'Responsive Design',
      'Accessibilité web',
    ],
  },
  {
    title: 'React.js',
    icon: FaReact,
    description: 'Créez des applications web modernes avec React',
    modules: [
      'Fondamentaux de React',
      'Hooks et State Management',
      'Routing avec Next.js',
      'Tests et déploiement',
    ],
  },
  {
    title: 'Back-end avec Node.js',
    icon: FaServer,
    description: 'Développez des API RESTful robustes',
    modules: [
      'Node.js et Express',
      'API RESTful',
      'Authentification',
      'Base de données',
    ],
  },
  {
    title: 'Base de données',
    icon: FaDatabase,
    description: 'Gérez vos données efficacement',
    modules: [
      'SQL et NoSQL',
      'MongoDB',
      'PostgreSQL',
      'ORM et migrations',
    ],
  },
];

export default function Formation() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Formation en Développement Web</h1>
        <p className="text-xl text-gray-600">
          Des formations complètes pour devenir développeur web professionnel
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {formations.map((formation, index) => (
          <motion.div
            key={formation.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl text-blue-600 mr-4">
                <formation.icon />
              </div>
              <h2 className="text-2xl font-bold">{formation.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{formation.description}</p>
            <ul className="space-y-2">
              {formation.modules.map((module) => (
                <li key={module} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {module}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-bold mb-4">Prêt à commencer votre formation ?</h2>
        <p className="text-gray-600 mb-8">
          Contactez-moi pour discuter de vos objectifs et créer un parcours personnalisé
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Demander un devis
        </a>
      </motion.div>
    </div>
  );
} 