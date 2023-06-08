import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderDefault from '../../components/header/Header.default';
import GlobalFont from '../../assets/font/GlobalFont';
import LazyImage from '../../components/custom/LazyImage';
import Spinner from '../../components/animation/Spinner';
import DotLoader from '../../components/animation/DotLoader';
import Skeleton, { SkeletonTheme } from '../../components/custom/Skeleton';
interface HomeProps {}
//

const Home = () => {
    //
    const [ListImageEffect, setListImageEffect] = useState<any[]>([]);
    //
    const ListImage = {
        original: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
        large2x:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350',
        small: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
    };
    //
    const loadingImages = () => {
        setTimeout(() => {
            setListImageEffect(Object.entries(ListImage));
        }, 2000);
    };
    //
    // test lazy loading image
    useEffect(() => {
        loadingImages();
    }, []);

    const LazyComponent = React.lazy(() => import('../../components/header/Header.default'));
    //

    return (
        <HomePage>
            <GlobalFont />
            <HeaderDefault />
            <div className="container">
                <div className="row">
                    <div className='"col-sm"'>
                        <SkeletonTheme repeat={3} borderRadius={10}>
                            <Skeleton circle={true} />
                            <Skeleton count={2} height="20px" borderRadius={5} direction="rtl" />
                        </SkeletonTheme>
                    </div>
                </div>
            </div>

            {ListImageEffect.length ? (
                ListImageEffect.map(([key, src], index) => <LazyImage key={index} src={src} alt={key} />)
            ) : (
                <SkeletonTheme repeat={3} borderRadius={10}>
                    <Skeleton circle={true} />
                    <Skeleton count={2} height="20px" borderRadius={5} />
                </SkeletonTheme>
            )}
        </HomePage>
    );
};

export default Home;

//
const HomePage = styled.div`
    font-family: 'Roboto';
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
