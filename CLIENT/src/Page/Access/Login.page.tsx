import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import InputFill from '../../components/custom/InputFill';
import { TypeInput, UserInputLogin } from './interface';
import { GoogleLogin, useGoogleLogin, CredentialResponse } from '@react-oauth/google';
import { Button } from '../../components/styledDefault/Button';
//
interface LoginProps {}
//

interface GoogleLoginProps {
    useOneTap?: boolean;
}

//
const LoginByGoogle: FC<GoogleLoginProps> = ({ useOneTap = false }) => {
    return (
        <GoogleLogin
            onSuccess={(response: CredentialResponse) => console.log(response)}
            onError={() => {
                console.log('Login Failed!');
            }}
            cancel_on_tap_outside={true}
            context="signin"
            shape="circle"
            useOneTap={useOneTap}
        />
    );
};
//
const Login: FC<LoginProps> = (props) => {
    //
    const [inputState, setInputState] = useState<UserInputLogin>({
        email: { type: 'text', value: '' },
        phone: { type: 'text', value: '' },
        password: { type: 'password', value: '' },
        confirmPassword: { type: 'password', value: '' },
    });

    const inputRef1 = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);

    // ON CHANGE INPUT
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (!name || !value) return;
        setInputState((prev: any) => ({
            ...prev,
            [name]: {
                ...prev[name],
                value,
            },
        }));
    };
    //CHILDREN (Memoize the MemoizedInputFill component to prevent re-renders if dependencies haven't changed)
    const InputToFill = Object.entries(inputState).map(([key, field]: [string, TypeInput], index: number) => {
        return useMemo(
            () => (
                <InputFill key={index} type={field.type} value={field.value} name={key} onChangeInput={onChangeInput} />
            ),
            [key, field.value],
        );
    });
    //
    const handleSubmitForm = () => {
        console.log(inputRef1.current?.value);
        console.log(inputRef2.current?.value);
    };
    return (
        <LoginWrapper>
            {InputToFill}
            <input ref={inputRef1} placeholder="test1..." />
            <input ref={inputRef2} placeholder="test2..." />
            <LoginByGoogle />
            <Button onClick={handleSubmitForm}>Submit</Button>
        </LoginWrapper>
    );
};

export default Login;
//
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
