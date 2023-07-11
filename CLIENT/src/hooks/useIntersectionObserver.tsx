import { RefObject, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}
const DefaultOptions: Args = {
    threshold: 0,
    root: null,
    rootMargin: '0%',
    freezeOnceVisible: false,
};
export function useIntersectionObserver(
    elementRef: RefObject<Element>,
    options: Args = DefaultOptions,
): IntersectionObserverEntry | undefined {
    //
    const { threshold, root, rootMargin, freezeOnceVisible } = options;
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
    };

    useEffect(() => {
        const node = elementRef?.current; // DOM Ref
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || frozen || !node) return;

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();
    }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin, frozen]);

    return entry;
}
