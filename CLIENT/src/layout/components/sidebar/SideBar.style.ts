import styled from 'styled-components';

export const SideBarStyle = styled.div`
    margin: 16px 0px;
    padding: 12px 8px;
    flex-direction: column;
    background-color: #f5f5fa;
    border-radius: 8px;
`;
//
export const ElementStyle = styled.a`
    display: flex;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    padding: 7px 16px;
    &:hover {
        background-color: #27272a1f;
    }
`;
export const Image = styled.div`
    height: 32px;
    width: 32px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 35%;
    overflow: hidden;
    box-sizing: content-box;
    margin-right: 8px;
    line-height: 0;
`;
export const Title = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: rgb(39, 39, 42);
`;
