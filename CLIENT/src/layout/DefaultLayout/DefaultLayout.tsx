import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import HeaderDefault from '../components/header/Header.default';
import Outstanding from '../components/sidebar/Outstanding';
import Category from '../components/sidebar/Category';

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <Wrapper>
            <HeaderDefault />
            <Container>
                <SideBar>
                    <Outstanding />
                    <Category />
                </SideBar>
                <Content>{children}</Content>
            </Container>
        </Wrapper>
    );
};

export default DefaultLayout;
//
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const Container = styled.div`
    display: flex;
    //justify-content: space-between;
`;
const SideBar = styled.div`
    width: 230px;
    max-height: 100vh;
    position: sticky;
    top: 5px;
    overflow-y: scroll;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    color: rgb(56, 56, 61);
    font-size: 14px;
    line-height: 20px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-left: 16px;
    //
    &::-webkit-scrollbar {
        width: 0rem;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
    }
`;
const Content = styled.div`
    width: calc(100vw - 300px);
    display: flex;
    flex-direction: column;
    align-items: center;
`;
