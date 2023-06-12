import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import HeaderDefault from '../components/header/Header.default';

interface HeaderOnlyLayoutProps {
    children: ReactNode;
}

const HeaderOnlyLayout: FC<HeaderOnlyLayoutProps> = ({ children }) => {
    return (
        <Wrapper>
            <HeaderDefault />
            <Container>
                <Content>{children}</Content>
            </Container>
        </Wrapper>
    );
};

export default HeaderOnlyLayout;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Content = styled.div`
    width: 100%;
`;
