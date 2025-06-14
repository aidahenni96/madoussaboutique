'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProjectClick = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-black/50 backdrop-blur-md"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-white">
              Henni Aïda
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/formation" className="text-gray-300 hover:text-white transition-colors">
                Formation
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleProjectClick}
                className="px-6 py-2 bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700 transition-colors"
              >
                Commencer un projet
              </motion.button>
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
} 