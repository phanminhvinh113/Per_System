import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import HeaderDefault from '../../components/header/Header.default';
import GlobalFont from '../../assets/font/GlobalFont';
import Skeleton, { SkeletonTheme } from '../../components/custom/Skeleton';
import axios from 'axios';
import Animal from './Animal';
import { useNavigate } from 'react-router-dom';

interface HomeProps {}
//
interface stateStyle {
    listAnimal: any[];
    isLoading: boolean;
    limit: number;
}
//
const Home = () => {
    //
    const [{ isLoading, listAnimal, limit }, setState] = useState<stateStyle>({
        listAnimal: [],
        isLoading: false,
        limit: 5,
    });
    const refAnimal = useRef<HTMLDivElement>(null);
    //
    const navigate = useNavigate();
    //
    const getAnimal = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        //
        setTimeout(async () => {
            const { data } = await axios({
                method: 'get',
                url: `https://dog.ceo/api/breed/hound/images/random/${limit}`,
            });
            if (!data) throw Error('Data Missing');

            setState((prev) => ({
                ...prev,
                isLoading: false,
                listAnimal: [...prev.listAnimal, ...data.message],
            }));
        }, 2000);
        //
    };
    //
    const handleIntersection: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
                console.log(entries);
                await getAnimal();
            }
        });
    };
    //
    useEffect(() => {
        getAnimal();
    }, []);
    //
    useEffect(() => {
        //
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };
        //
        const observer = new IntersectionObserver(handleIntersection, options);
        if (refAnimal && refAnimal.current) {
            observer.observe(refAnimal.current);
        }
        //
        return () => observer.disconnect();
    }, [isLoading, listAnimal]);

    const animalContent = useMemo(() => {
        return listAnimal.map((animal: any, index) => {
            return index + 1 === listAnimal.length ? (
                <Animal key={index} ref={refAnimal} animal={animal} />
            ) : (
                <Animal key={index} animal={animal} />
            );
        });
    }, [listAnimal]);
    //
    const skeletonMemo = (
        <SkeletonTheme repeat={2} borderRadius={10} width="500px">
            <Skeleton circle={true} size_circle="75px" />
            <Skeleton count={1} width="100px" borderRadius={5} />
            <Skeleton count={2} height="20px" borderRadius={5} />
        </SkeletonTheme>
    );
    //
    return (
        <HomePage>
            <HeaderDefault />

            {listAnimal.length && animalContent}
            {isLoading && skeletonMemo}
        </HomePage>
    );
};

export default Home;

//
const HomePage = styled.div`
    font-family: 'Roboto';
    display: grid;
    justify-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
