import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aida Henni - Développeuse Full Stack",
  description: "Création de boutiques en ligne et formation en développement web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${inter.className} h-full`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 