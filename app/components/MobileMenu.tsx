'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  href: string;
  label: string;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems: MenuItem[] = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/formation', label: 'Formation' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
            role="presentation"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-64 bg-gray-900 z-50 p-6"
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Fermer le menu"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <nav className="space-y-6" role="navigation" aria-label="Menu principal">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block text-lg text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="absolute bottom-6 left-6 right-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full px-6 py-3 bg-purple-600 text-white text-center rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Commencer un projet
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 