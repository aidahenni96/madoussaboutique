'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "Boutique de Mode",
    description: "Une boutique en ligne moderne avec système de paiement intégré et gestion des stocks.",
    image: "/images/portfolio/mode-shop.jpg",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Plateforme de Formation",
    description: "Une plateforme complète pour la formation en ligne avec suivi des progrès.",
    image: "/images/portfolio/formation.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#"
  },
  {
    title: "Site Vitrine",
    description: "Un site vitrine moderne pour une entreprise de services.",
    image: "/images/portfolio/vitrine.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#"
  }
];

export default function Portfolio() {
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
            Mes Réalisations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 bg-gray-200">
                {/* Image placeholder - à remplacer par vos images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Image du projet
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  Voir le projet
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            N'hésitez pas à me contacter pour discuter de votre projet
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            Me contacter
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
} 