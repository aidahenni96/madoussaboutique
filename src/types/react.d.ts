/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react' {
  export * from 'react';
  export type ReactNode = React.ReactNode;
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: readonly any[]): T;
  export function useMemo<T>(factory: () => T, deps: readonly any[]): T;
}

declare module 'react-dom' {
  export * from 'react-dom';
} 