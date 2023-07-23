import { FC, memo, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import defaultImage from '../../assets/images/home/default-image.jpg';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface LazyImageProps {
    src: string;
    alt?: string;
    circle?: boolean;
    height?: string;
    width?: string;
    size_circle?: number;
    borderRadius?: number;
    style?: React.CSSProperties;
}
//
interface ImageStyleProps {
    src?: string;
    alt?: string;
    circle?: boolean;
    height?: string;
    width?: string;
    size_circle?: number;
    borderRadius?: number;
}
const LazyImage: FC<LazyImageProps> = (props) => {
    const { src, alt } = props;
    //
    const imageRef = useRef<HTMLImageElement>(null);
    //
    const entry = useIntersectionObserver(imageRef);
    //
    useEffect(() => {
        if (entry?.isIntersecting && imageRef.current) imageRef.current.src = src;
    }, [src, entry?.isIntersecting]);

    return <Image {...props} ref={imageRef} alt={alt} src={defaultImage} />;
};

export default memo(LazyImage);
//
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
//
const Image = styled.img<ImageStyleProps>`
    height: ${({ circle, height = '100%', size_circle = 50 }) => (circle ? size_circle + 'px' : height)};
    width: ${({ circle, width = '100%', size_circle = 50 }) => (circle ? size_circle + 'px' : width)};
    border-radius: ${({ circle, borderRadius }) => (circle ? '50%' : borderRadius + 'px')};
`;
