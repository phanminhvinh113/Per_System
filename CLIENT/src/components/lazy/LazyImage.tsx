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
                console.log(entry);
                if (entry.isIntersecting || entry.intersectionRatio > 0) {
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

    return <Image src={src} alt={alt} />;
};

export default LazyImage;
const Image = styled.img`
    height: 300px;
    width: 300px;
    margin: auto;
`;
