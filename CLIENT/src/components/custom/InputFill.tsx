import React, { FunctionComponent, useCallback, useMemo } from 'react';
import styled from 'styled-components';

interface InputFillProps {
    name: string;
    type: string;
    value: string | number;
    style?: React.CSSProperties;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
//
const InputFill: FunctionComponent<InputFillProps> = (props) => {
    const { name, onChangeInput, type, style, value } = props;
    console.log('re-render', name);
    return <Fill type={type} name={name} value={value} placeholder={`${name}...`} onChange={onChangeInput} />;
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
