import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from '../../components/custom/Skeleton';
import axios from 'axios';
import Animal from './Animal';
import { useNavigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout';
import ToggleSwitches from '../../components/button/ToggleSwitches';
import Banner from './Banner';
import ProductSuggest from './ProductSuggest';

interface HomeProps {}
//
interface stateInterface {
    listAnimal: any[];
    isLoading: boolean;
    limit: number;
}
//
const Home = () => {
    return (
        <HomePage>
            <DefaultLayout>
                <Banner />
                <ProductSuggest />
            </DefaultLayout>
        </HomePage>
    );
};

export default Home;

//
const HomePage = styled.div``;
