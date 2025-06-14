'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-red-500 text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-300 mb-4">
          Bienvenue sur mon site
        </h1>
        <p className="text-gray-200">
          Le site est en cours de construction
        </p>
      </div>

      <motion.div
        key={count} 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="text-7xl font-extrabold mb-6"
      >
        {count}
      </motion.div>

      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        +1
      </button>
    </main>
  );
}
