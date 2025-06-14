'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={link}
          className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
        >
          Voir le projet →
        </Link>
      </div>
    </motion.div>
  );
} 