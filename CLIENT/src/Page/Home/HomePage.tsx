import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../../utils/routes';
import User from '../User';
import { Button } from '../../components/StyledDefault/Button';
import HeaderDefault from '../../components/Header/Header.default';
import GlobalFont from '../../assets/font/GlobalFont';
interface HomeProps {}

const Home = () => {
    return (
        <HomePage>
            <GlobalFont />
            <HeaderDefault />
        </HomePage>
    );
};

export default Home;

//
const HomePage = styled.div`
    font-family: 'Roboto';
`;
