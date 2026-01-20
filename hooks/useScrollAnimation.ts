import { useEffect, useRef } from 'react';

export const useScrollAnimation = (direction: 'left' | 'right' | 'up' | 'down' = 'up', delay: number = 0) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate-in');
                        }, delay);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [delay]);

    const getInitialClass = () => {
        switch (direction) {
            case 'left':
                return 'opacity-0 -translate-x-20';
            case 'right':
                return 'opacity-0 translate-x-20';
            case 'up':
                return 'opacity-0 translate-y-10';
            case 'down':
                return 'opacity-0 -translate-y-10';
            default:
                return 'opacity-0 translate-y-10';
        }
    };

    return {
        ref: elementRef,
        className: `transition-all duration-700 ease-out ${getInitialClass()}`
    };
};
