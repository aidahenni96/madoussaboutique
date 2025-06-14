# Mon Site Web

Un site web moderne construit avec Next.js, React et Framer Motion.

## Technologies utilisées

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Déploiement

Ce projet est configuré pour être déployé sur Vercel.

1. Créez un compte sur [Vercel](https://vercel.com)
2. Installez Vercel CLI :
```bash
npm install -g vercel
```

3. Déployez :
```bash
vercel
```

Ou connectez votre repository GitHub à Vercel pour un déploiement automatique.

## Structure du projet

```
src/
  ├── app/              # Pages et layouts
  ├── components/       # Composants réutilisables
  ├── types/           # Définitions TypeScript
  └── styles/          # Styles globaux
```

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm start` : Lance la version de production
- `npm run lint` : Vérifie le code avec ESLint

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
