import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaGraduationCap, FaUsers, FaCertificate } from 'react-icons/fa';

const formations = [
  {
    id: 1,
    title: 'Développement Web Frontend',
    icon: FaCode,
    description: 'Maîtrisez les technologies frontend modernes',
    modules: [
      'HTML5 & CSS3 avancé',
      'JavaScript ES6+',
      'React.js & Next.js',
      'Tailwind CSS',
      'Responsive Design'
    ],
    duration: '6 semaines',
    level: 'Débutant à Intermédiaire'
  },
  {
    id: 2,
    title: 'Développement Backend',
    icon: FaLaptopCode,
    description: 'Créez des applications backend robustes',
    modules: [
      'Node.js & Express',
      'Bases de données (SQL & NoSQL)',
      'APIs RESTful',
      'Authentification & Sécurité',
      'Déploiement'
    ],
    duration: '8 semaines',
    level: 'Intermédiaire'
  },
  {
    id: 3,
    title: 'E-commerce & Boutiques en ligne',
    icon: FaGraduationCap,
    description: 'Développez des boutiques en ligne complètes',
    modules: [
      'Architecture E-commerce',
      'Intégration de paiement',
      'Gestion des stocks',
      'SEO & Marketing',
      'Analytics'
    ],
    duration: '6 semaines',
    level: 'Tous niveaux'
  }
];

const benefits = [
  {
    icon: FaUsers,
    title: 'Formation en petit groupe',
    description: 'Maximum 5 participants pour un suivi personnalisé'
  },
  {
    icon: FaCertificate,
    title: 'Certification',
    description: 'Obtenez un certificat reconnu à la fin de votre formation'
  },
  {
    icon: FaGraduationCap,
    title: 'Projets pratiques',
    description: 'Apprenez en construisant des projets réels'
  }
];

export default function Formation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Formation Professionnelle
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Développez vos compétences en développement web avec des formations pratiques et personnalisées
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <benefit.icon className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
            >
              <formation.icon className="text-4xl text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{formation.title}</h3>
              <p className="text-gray-400 mb-6">{formation.description}</p>
              <ul className="space-y-3 mb-6">
                {formation.modules.map((module, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {module}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 mb-2">Durée: {formation.duration}</p>
                <p className="text-gray-400">Niveau: {formation.level}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer votre formation ?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Inscrivez-vous maintenant
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
} 