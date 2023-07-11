import { FC, ForwardedRef, FunctionComponent, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import LazyImage from '../../components/custom/LazyImage';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ProductProps {
    product: string;
    ref?: ForwardedRef<HTMLDivElement>;
    getMoreProduct: () => void;
}
//
interface ProductRef {
    getElementRef: () => HTMLDivElement | null;
}
//
const Product: FC<ProductProps> = forwardRef<ProductRef, ProductProps>(({ product, getMoreProduct }, ref) => {
    //
    const elementRef = useRef<HTMLDivElement | null>(null);
    //
    useImperativeHandle(ref, () => ({
        getElementRef: () => elementRef.current,
    }));
    //
    const entry = useIntersectionObserver(elementRef, {});

    useEffect(() => {
        if (entry?.isIntersecting) getMoreProduct();
    }, [entry?.isIntersecting, elementRef]);
    //
    return (
        <ProductWrapper ref={ref ? elementRef : null}>
            <LazyImage src={product} borderRadius={5} height="150px" />
            <Description>The dog is a domesticated descendant of the wolf. Also called the domestic dog,</Description>
            <InfoWrapper>
                <Price>12.000</Price>
                <Sold>Sold: 12.000</Sold>
            </InfoWrapper>
        </ProductWrapper>
    );
});

export default Product;
//
const ProductWrapper = styled.div`
    flex: 1 0 20%;
    margin: 10px;
    @media (max-width: 1024px) {
        flex-basis: 33.33%;
    }

    @media (max-width: 768px) {
        flex-basis: 100%;
    }
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 6px;
`;
const Description = styled.p`
    font-size: 12px;
    word-wrap: break-word;
    white-space: normal;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin: 5px 20px;
`;
const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;
const Price = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
    color: #ee4d2d;
`;
const Sold = styled.span`
    color: rgba(0, 0, 0, 0.54);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
