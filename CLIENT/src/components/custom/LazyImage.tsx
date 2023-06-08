import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface LazyImageProps {
    src: string;
    alt: string;
}

const LazyImage: FC<LazyImageProps> = ({ src, alt }) => {
    //
    const imageRef = useRef<HTMLImageElement>(null);

    //
    const lazyImage = () => {};
    //
    useEffect(() => {
        const observer = new window.IntersectionObserver((entires) => {
            entires.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting && imageRef.current) {
                    imageRef.current.src = src;
                    observer.unobserve(imageRef.current);
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

    return <Image ref={imageRef} alt={alt} loading="lazy" />;
};

export default LazyImage;
//
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
//
const Image = styled.img`
    height: 300px;
    width: 300px;
    margin: auto;
`;
