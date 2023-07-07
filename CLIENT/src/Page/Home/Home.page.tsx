import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from '../../components/custom/Skeleton';
import axios from 'axios';
import Animal from './Animal';
import { useNavigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout';
import ToggleSwitches from '../../components/button/ToggleSwitches';

interface HomeProps {}
//
interface stateInterface {
    listAnimal: any[];
    isLoading: boolean;
    limit: number;
}
//
const Home = () => {
    //
    const [{ isLoading, listAnimal, limit }, setState] = useState<stateInterface>({
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
    };
    //
    useEffect(() => {
        getAnimal();
    }, []);
    //
    const handleIntersection: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
                await getAnimal();
            }
        });
    };
    //
    useEffect(() => {
        const observer = new window.IntersectionObserver(handleIntersection);
        if (refAnimal && refAnimal.current) {
            observer.observe(refAnimal.current);
        }
        return () => observer.disconnect();
    }, [listAnimal]);

    const animalContent = listAnimal.map((animal: any, index) => {
        return <Animal key={index} ref={index === listAnimal.length - 1 ? refAnimal : null} animal={animal} />;
    });

    const skeletonMemo = (
        <SkeletonTheme repeat={2} borderRadius={10} width="500px">
            <Skeleton circle={true} size_circle="75px" />
            <Skeleton count={1} width="100px" borderRadius={5} />
            <Skeleton count={2} height="20px" borderRadius={5} />
        </SkeletonTheme>
    );

    return (
        <HomePage>
            <DefaultLayout>
                <ToggleSwitches />
                {!!listAnimal.length && animalContent}
                {isLoading && skeletonMemo}
            </DefaultLayout>
        </HomePage>
    );
};

export default Home;

//
const HomePage = styled.div``;
