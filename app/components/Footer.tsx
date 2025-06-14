import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Henni Aïda</h3>
            <p className="text-gray-400 mb-4">
              Développeuse web passionnée, spécialisée dans la création de sites web modernes
              et de boutiques en ligne. Formatrice professionnelle en développement web.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web" className="text-gray-400 hover:text-white transition-colors">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="text-gray-400 hover:text-white transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services#formation" className="text-gray-400 hover:text-white transition-colors">
                  Formation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: contact@henniaida.com</li>
              <li className="text-gray-400">Téléphone: +33 6 XX XX XX XX</li>
              <li className="text-gray-400">Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Henni Aïda. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 