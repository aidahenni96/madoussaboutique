'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Erreur:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Oups !
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Une erreur est survenue
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Désolé, une erreur inattendue s'est produite.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="px-8 py-3 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition-colors"
          >
            Réessayer
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
} 