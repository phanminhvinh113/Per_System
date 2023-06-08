import { FunctionComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';

//
interface SpinnerProps {
    //
    size?: number;
    size_wide?: number;
    color?: string;
    color_border?: string;
    speed?: number;
    type?: 'type_1' | 'type_2' | 'type_3' | 'type_4' | 'type_5' | 'type_6';
    //
}
const Spinner: FunctionComponent<SpinnerProps> = ({ size, color, speed, type, color_border, size_wide }) => {
    return (
        <SpinnerLoading
            type={type}
            size={size}
            size_wide={size_wide}
            color={color}
            speed={speed}
            color_border={color_border}
        ></SpinnerLoading>
    );
};

export default Spinner;
//
const circ_animation = keyframes`
 from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }

`;
const SpinnerLoading = styled.div<SpinnerProps>`
    margin: 1em auto;
    display: grid;
    width: ${(props) => props.size || 35}px;
    height: ${(props) => props.size || 35}px;
    border-radius: 50%;
    border: ${(props) => props?.size_wide || 4}px solid ${(props) => props.color_border || 'silver'};
    animation: ${circ_animation} ${(props) => props.speed || 0.7}s linear infinite;
    border-bottom-color: ${(props) => props.color || 'grey'};
    //
    ${(props) => {
        switch (props.type) {
            case 'type_1':
                return `
          /* Styles for type_1 */
            border-bottom-color:transparent;
        `;
            case 'type_2':
                return `
          /* Styles for type_2 */
            
            border-bottom-color:transparent;
            border-left-color:transparent;
        `;
            case 'type_3':
                return `
          /* Styles for type_3 */
            border-width:0px;
            border-radius: 50%;
            border-top: 3px solid ${props.color || 'grey'};
            border-right: 3px solid transparent;
        `;
            case 'type_4':
                return `
                border-color:  ${props.color || 'grey'};
                position:relative;
                ::after {
                    position:absolute;
                    content:"";
                    width:80%;
                    height:80%;
                    background: transparent;
                    top: 50%;
                    left:50;
                    margin-left:10%;
                    margin-top:-40%;
                    border-radius:50%;
                    border:${props.size_wide ? props.size_wide * 0.5 : 2}px solid ${props.color || 'grey'};
                    box-sizing:border-box;
                    border-bottom-color:transparent;
                    border-left-color:transparent;
                }
            `;
            case 'type_5':
                return `
                border:${props.size_wide || 3}px solid ${props.color_border || 'grey'};
                position:relative;
               
                border-bottom-color:transparent;
                border-left-color:transparent;
                ::after {
                    position:absolute;
                    content:"";
                    width:80%;
                    height:80%;
                    background: transparent;
                    top: 50%;
                    left:50;
                    margin-left:10%;
                    margin-top:-40%;
                    border-radius:50%;
                    border:2px solid grey;
                    box-sizing:border-box;
                    border-bottom-color:transparent;
                    border-left-color:transparent;
                  
                    animation: circ_animation ${props.speed ? props.speed / 2 : 0.7 / 2} reverse linear infinite;
                }
                `;
            case 'type_6':
                return `
                    border-width:0px;
                    border-radius: 50%;
                    border-top: ${props.size_wide || 3}px solid ${props.color || 'grey'};
                    border-right:  ${props.size_wide || 3}px solid transparent;
                    `;
            default:
                return '';
        }
    }}
`;
//
