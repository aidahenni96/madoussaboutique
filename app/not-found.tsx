'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-6">Page non trouvée</h2>
        <p className="text-gray-400 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  );
} 