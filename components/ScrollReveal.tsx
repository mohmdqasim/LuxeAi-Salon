
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'slide-in-left' | 'slide-in-right' | 'zoom-in' | 'fade-in';
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
  threshold = 0.05,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Using inline styles and classes that don't fight for the same properties
  // 'both' in the animation definition handles the 0% and 100% states stably.
  const activeClass = isVisible ? `animate-${animation}` : 'opacity-0 pointer-events-none';

  return (
    <div
      ref={domRef}
      className={`${className} will-animate ${activeClass}`}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
