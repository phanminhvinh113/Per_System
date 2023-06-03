import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface LazyImageProps {
    src: string;
    alt: string;
}

const LazyImage: FC<LazyImageProps> = ({ src, alt }) => {
    //
    const imageRef = useRef<HTMLImageElement>(null);
    //
    useEffect(() => {
        //
        const observer = new IntersectionObserver((entires) => {
            entires.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = imageRef.current;
                    console.log(entry);
                    if (img) {
                        img.src = src;
                        observer.unobserve(img);
                    }
                }
            });
        });
        //
        const img = imageRef.current;
        if (img) observer.observe(img);
        //
        return () => {
            if (img) observer.unobserve(img);
        };
    }, [src]);
    //

    return <Image ref={imageRef} alt={alt} />;
};

export default LazyImage;
//
const Image = styled.img`
    height: 300px;
    width: 300px;
    margin: auto;
`;
