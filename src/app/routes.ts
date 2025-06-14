export const routes = {
  home: '/',
  services: '/services',
  formation: '/formation',
  contact: '/contact',
} as const;

export type Route = keyof typeof routes; 