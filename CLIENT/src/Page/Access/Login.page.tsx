import { FunctionComponent, memo, useMemo, useState } from 'react';
import styled from 'styled-components';
import InputFill from '../../components/Input/InputFill';

interface LoginProps {}
//
interface UserInput {
    email: TypeInput;
    phone: TypeInput;
    password: TypeInput;
    confirmPassword: TypeInput;
}
//
interface TypeInput {
    type: string;
    text: string | number;
}
//
const Login: FunctionComponent<LoginProps> = () => {
    //
    const [input, setInput] = useState<UserInput>({
        email: { type: 'text', text: '' },
        phone: { type: 'text', text: '' },
        password: { type: 'password', text: '' },
        confirmPassword: { type: 'password', text: '' },
    });
    // ON CHANGE INPUT
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInput((prev: any) => ({
            ...prev,
            [name]: {
                ...prev[name],
                text: value,
            },
        }));
    };
    // CHILDREN (Memoize the MemoizedInputFill component to prevent re-renders if dependencies haven't changed)
    const children = Object.entries(input).map(([key, field]: [string, TypeInput], index: number) => {
        return useMemo(
            () => (
                <InputFill key={index} type={field.type} value={field.text} name={key} onChangeInput={onChangeInput} />
            ),
            [field.text, key],
        );
    });
    //
    return <LoginWrapper>{children}</LoginWrapper>;
};

export default Login;
//
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
