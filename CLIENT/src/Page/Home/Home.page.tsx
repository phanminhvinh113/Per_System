import styled from 'styled-components';
import { DefaultLayout } from '../../layout';
import Banner from './Banner';
import ProductSuggest from './ProductSuggest';
import Seller from '../seller/Seller.page';
import { Fragment, Suspense, lazy } from 'react';
import Category from '../../layout/components/sidebar/Category';
import Outstanding from '../../layout/components/sidebar/Outstanding';

interface HomeProps {}
//
interface stateInterface {
    listAnimal: any[];
    isLoading: boolean;
    limit: number;
}
//
const childrenSideBar = (
    <Fragment>
        <Outstanding />
        <Category />
    </Fragment>
);
//
const Home = () => {
    return (
        <HomePage>
            <DefaultLayout childrenSideBar={childrenSideBar}>
                <Banner />
                <ProductSuggest />
            </DefaultLayout>
        </HomePage>
    );
};

export default Home;

//
const HomePage = styled.div``;
