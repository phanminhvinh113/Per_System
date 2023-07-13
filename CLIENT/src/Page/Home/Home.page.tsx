import styled from 'styled-components';
import { DefaultLayout } from '../../layout';
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
