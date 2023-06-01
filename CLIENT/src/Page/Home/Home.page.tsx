import styled from 'styled-components';
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
