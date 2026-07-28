import { useCallback, useEffect, useRef, useState } from "react";

interface UseScrollSpyOptions {
    ids: string[];
    threshold?: number | number[]
}

export const useScrollSpy = ({
    ids,
    threshold = [0.2, 0.4, 0.6, 0.8 ]
}: UseScrollSpyOptions) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const refs = useRef<Record<string, HTMLDivElement | null>>({});
    const [activeId, setActiveId] = useState(ids[0]);
    const register = useCallback(
        (id: string) => (el: HTMLDivElement | null) => {
            refs.current[id] = el;
        },
        []
    );

    const scrollTo = useCallback((id: string) => {
        console.log(id);
        
        setActiveId(id)
        refs.current[id]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if(!visible.length) return;

                const current = visible.reduce((prev, next) =>
                    next.intersectionRatio > prev.intersectionRatio ? next : prev
                );

                setActiveId(current.target.id);
            },
            {
                root: containerRef.current,
                threshold,
            }
        );

        ids.forEach((id) => {
            const section = refs.current[id];
            if(section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, [ids, threshold]);

    return {
        activeId,
        containerRef,
        register,
        scrollTo
    }
}