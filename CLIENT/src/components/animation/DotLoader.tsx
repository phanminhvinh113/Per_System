import { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

interface DotLoaderProps {
    size?: number;
    color?: string;
    speed?: number;
}

const DotLoader: FunctionComponent<DotLoaderProps> = ({ size, color, speed }) => {
    return <DotLoaderLoading size={size} color={color} speed={speed}></DotLoaderLoading>;
};

export default DotLoader;
//
const rotate = keyframes`
     from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
const DotLoaderLoading = styled.div<DotLoaderProps>`
    background: transparent;
    width: 2px;
    height: 2px;
    position: relative;
    margin: 2em auto;
    ::after {
        display: block;
        content: '';
        border-radius: 50%;
        height: 2px;
        width: 2px;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        box-shadow: 10px 0 0 2px #333, 7px 7px 0 2px #999, 0 10px 0 2px #999, -7px 7px 0 2px #999, -10px 0 0 2px #999,
            -7px -7px 0 2px #999, 0 -10px 0 2px #333, 7px -7px 0 2px #111;
        -webkit-animation: ${rotate} ${(props) => props.speed || 0.7}s steps(8) infinite;
        -o-animation: ${rotate} ${(props) => props.speed || 0.7}s steps(8) infinite;
        animation: ${rotate} ${(props) => props.speed || 0.7}s steps(8) infinite;
    }
`;
//
