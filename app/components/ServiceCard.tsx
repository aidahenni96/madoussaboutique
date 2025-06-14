'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
} 