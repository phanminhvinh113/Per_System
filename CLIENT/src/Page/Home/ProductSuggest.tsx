import { FunctionComponent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import Skeleton, { SkeletonTheme } from '../../components/custom/Skeleton';
import axios from 'axios';

interface IProductProps {}

const ProductSuggest: FunctionComponent<IProductProps> = () => {
    //
    const [listProduct, setListProduct] = useState<any[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    //
    const refProduct = useRef<HTMLDivElement | null>(null);
    //
    const getProduct = async () => {
        setIsLoading(true);
        //
        const { data } = await axios({
            method: 'get',
            url: `https://dog.ceo/api/breed/hound/images/random/20`,
        });
        if (!data) throw Error('Data Missing');
        setListProduct((prev) => [...prev, ...data.message]);
        setIsLoading(false);
    };
    //
    useEffect(() => {
        getProduct();
    }, []);
    //
    if (isLoading)
        return (
            <Container>
                {new Array(12).fill(0).map((_, index) => (
                    <Item key={index}>
                        <SkeletonTheme borderRadius={15}>
                            <Skeleton height="125px" borderRadius={20} style={{ marginTop: '-10px' }} />
                            <Skeleton borderRadius={5} width="80%" style={{ marginTop: '10px' }} />
                            <Skeleton borderRadius={5} width="65%" />
                            <SkeletonBetween>
                                <Skeleton borderRadius={5} width="30%" />
                                <Skeleton borderRadius={5} width="40%" />
                            </SkeletonBetween>
                        </SkeletonTheme>
                    </Item>
                ))}
            </Container>
        );
    //
    return (
        <ProductWrapper>
            <Container>
                {listProduct.map((item: any, index: number) => (
                    <Product
                        key={index}
                        ref={index === listProduct.length - 1 ? refProduct : null}
                        product={item}
                        getMoreProduct={getProduct}
                    />
                ))}
            </Container>
        </ProductWrapper>
    );
};

export default ProductSuggest;
//STYLED PRODUCT
//
const ProductWrapper = styled.div``;
//
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
//
const Item = styled.div`
    flex: 1 0 20%;
    margin: 10px;
    text-align: center;

    @media (max-width: 1024px) {
        flex-basis: 33.33%;
    }

    @media (max-width: 768px) {
        flex-basis: 100%;
    }
`;
//
const SkeletonBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
