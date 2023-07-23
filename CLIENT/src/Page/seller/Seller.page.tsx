import { Fragment, FunctionComponent } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';
import { DefaultLayout } from '../../layout';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
//
interface SellerProps {}
//
const childrenSideBar = (
    <Fragment>
        <h1>Side Bar</h1>
    </Fragment>
);
const Seller: FunctionComponent<SellerProps> = () => {
    useDocumentTitle('Shop');
    return (
        <DefaultLayout childrenSideBar={childrenSideBar} isHiddenHeader={true}>
            <SellerWrapper>
                <CountUp start={0} end={1000000} separator={'.'} duration={2.75} decimals={1} decimal="." />
            </SellerWrapper>
        </DefaultLayout>
    );
};
//
export default Seller;
//
const SellerWrapper = styled.div``;
