declare module 'framer-motion' {
  import { ComponentProps, ComponentType } from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    drag?: boolean;
    dragConstraints?: any;
    dragElastic?: number;
    dragMomentum?: boolean;
    onDragStart?: () => void;
    onDragEnd?: () => void;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    onTap?: () => void;
    onTapStart?: () => void;
    onTapCancel?: () => void;
    onAnimationComplete?: () => void;
    onUpdate?: () => void;
    onLayoutEffect?: () => void;
    onViewportEnter?: () => void;
    onViewportLeave?: () => void;
    viewport?: any;
    layout?: boolean | string;
    layoutId?: string;
    layoutDependency?: any;
    layoutEffect?: boolean;
    dragDirectionLock?: boolean;
    dragPropagation?: boolean;
    dragTransition?: any;
    dragElastic?: number;
    dragMomentum?: boolean;
    dragMomentumVelocity?: number;
    dragMomentumDecay?: number;
    dragMomentumDamping?: number;
    dragMomentumMass?: number;
    dragMomentumStiffness?: number;
    dragMomentumRestDelta?: number;
    dragMomentumRestSpeed?: number;
    dragMomentumRestTime?: number;
    dragMomentumRestDistance?: number;
    dragMomentumRestVelocity?: number;
    dragMomentumRestAcceleration?: number;
    dragMomentumRestDeceleration?: number;
    dragMomentumRestForce?: number;
    dragMomentumRestTorque?: number;
    dragMomentumRestAngularVelocity?: number;
    dragMomentumRestAngularAcceleration?: number;
    dragMomentumRestAngularDeceleration?: number;
    dragMomentumRestAngularForce?: number;
    dragMomentumRestAngularTorque?: number;
  }

  export const motion: {
    div: ComponentType<ComponentProps<'div'> & MotionProps>;
    span: ComponentType<ComponentProps<'span'> & MotionProps>;
    h1: ComponentType<ComponentProps<'h1'> & MotionProps>;
    h2: ComponentType<ComponentProps<'h2'> & MotionProps>;
    h3: ComponentType<ComponentProps<'h3'> & MotionProps>;
    p: ComponentType<ComponentProps<'p'> & MotionProps>;
    a: ComponentType<ComponentProps<'a'> & MotionProps>;
    button: ComponentType<ComponentProps<'button'> & MotionProps>;
    [key: string]: ComponentType<any>;
  };

  export function useScroll(): {
    scrollX: any;
    scrollY: any;
    scrollXProgress: any;
    scrollYProgress: any;
  };

  export function useTransform(
    value: any,
    input: number[],
    output: number[],
    options?: { clamp?: boolean }
  ): any;
} 