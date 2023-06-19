import { FC, useMemo, useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import { CREATE_NEW_USER, GET_USER } from '../../graphql/service/userService';
import { Users } from '../../components/interface/interface';
import { useNavigate } from 'react-router-dom';
import { backPage } from '../../utils/constant';
import routes from '../../utils/routes';

interface Props {}

const Register: FC<Props> = () => {
    //
    const [state, setState] = useState({
        inputFill: [
            { value: '', name: 'email', type: 'text' },
            { value: '', name: 'password', type: 'password' },
            { value: '', name: 'confirm password', type: 'password' },
        ],
    });
    //
    const navigate = useNavigate();
    //
    const testOnChangeInput = (e: any, id: number) => {
        setState((prev) => {
            let tagTarget = prev.inputFill.find((item, index) => index === id);
            if (tagTarget) tagTarget.value = e.target.value;
            return { ...prev };
        });
    };
    const handleRegisterUser = () => {
        console.log(state.inputFill);
    };
    //

    console.log('re-render');
    return (
        <Wrapper className="container mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8">
            <button className="mb-4" onClick={() => navigate(backPage.prevPage)}>
                Back Home
            </button>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {state.inputFill.map((item, index) => {
                    return useMemo(
                        () => (
                            <Input
                                key={index}
                                value={item.value}
                                type={item.type}
                                placeholder="Typing"
                                name={item.name}
                                onChange={(e) => testOnChangeInput(e, index)}
                                hidden={false}
                            />
                        ),
                        [item.value, item.name],
                    );
                })}
            </div>
            <button onClick={handleRegisterUser}>Register</button>
        </Wrapper>
    );
};

export default Register;
//
const Wrapper = styled.div`
    button {
        margin-top: 20px;
        border: 1px solid #c3c5c9;
        border-radius: 8px;
        padding: 8px 10px;
        &:hover {
            opacity: 0.6;
        }
    }
`;
const Input = styled.input`
    padding: 0.5rem 0.875rem;
    border: 1px solid #e5e7eb;
    outline: none;
    border-radius: 0.375rem;
`;
