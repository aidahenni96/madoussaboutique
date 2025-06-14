/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module 'next' {
  export * from 'next';
}

declare module 'next/link' {
  import { ComponentProps, ComponentType } from 'react';
  export default function Link(props: ComponentProps<'a'>): JSX.Element;
}

declare module 'next/image' {
  import { ComponentProps } from 'react';
  export default function Image(props: ComponentProps<'img'>): JSX.Element;
}

declare module 'next/navigation' {
  export function useRouter(): {
    push: (url: string) => void;
    replace: (url: string) => void;
    back: () => void;
  };
  export function usePathname(): string;
  export function useSearchParams(): URLSearchParams;
} 