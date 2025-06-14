'use client';

import { motion } from 'framer-motion';
import { FaCode, FaShoppingCart, FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';
import IconWrapper from './components/IconWrapper';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Aida Henni
            </h1>
            <p className="text-xl mb-8">
              Développeuse Full-Stack & Formatrice
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/services" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Mes Services
              </Link>
              <Link href="/contact" className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
                Me Contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mes Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <IconWrapper Icon={FaShoppingCart} className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Boutiques en Ligne</h3>
              <p className="text-gray-600 mb-4">
                Création de boutiques e-commerce professionnelles et personnalisées
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-800">
                En savoir plus →
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <IconWrapper Icon={FaCode} className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
              <p className="text-gray-600 mb-4">
                Sites web modernes et applications sur mesure
              </p>
              <Link href="/services" className="text-purple-600 hover:text-purple-800">
                En savoir plus →
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <IconWrapper Icon={FaGraduationCap} className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Formations</h3>
              <p className="text-gray-600 mb-4">
                Formation en développement web et création de boutiques en ligne
              </p>
              <Link href="/formation" className="text-green-600 hover:text-green-800">
                En savoir plus →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Que vous souhaitiez créer une boutique en ligne ou vous former au développement web,
            je suis là pour vous accompagner dans votre réussite.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition inline-block"
          >
            Discutons de votre projet
          </Link>
        </div>
      </section>
    </div>
  );
} 