import { FunctionComponent, memo, useCallback, useMemo } from 'react';
import styled from 'styled-components';

interface InputFillProps {
    name: string;
    type: string;
    value: string | number;
    style?: InputStyle;
    onChangeInput: (e: any) => void;
}
interface InputStyle {
    padding?: string;
    border?: string;
    color?: string;
    outline?: string;
    margin?: string;
}
//
const InputFill: FunctionComponent<InputFillProps> = (props) => {
    const { type, value, style, name, onChangeInput } = props;
    console.log('component re-render::', name);
    return <Fill {...props} placeholder={`${name}...`} />;
};
//
export default InputFill;
//

const Fill = styled.input`
    border: 1px solid #ccc;
    outline: none;
    padding: 5px 10px;
    margin: 20px 0;
    border-radius: 5px;
    display: block;
    width: 400px;
`;
