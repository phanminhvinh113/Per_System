import React, { FC, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import styled, { css } from 'styled-components';
import { DELETE_USER, GET_USER } from '../../graphql/service/userService';
import { Users } from '../../components/interface/interface';
import { Button } from '../../components/styledDefault/Button';
import { useNavigate } from 'react-router-dom';
//
interface Props {
    users: Users[];
    loading: boolean;
    background?: string;
}

const DisplayUser: React.FC<Props> = ({ users }) => {
    const navigate = useNavigate();
    const [deleteUser, { loading, error, data }] = useMutation(DELETE_USER);
    const handleRemove = async (_id: string | undefined) => {
        await deleteUser({
            variables: { _id },
            refetchQueries: [
                {
                    query: GET_USER,
                },
            ],
        });
    };
    return (
        <React.Fragment>
            <TableHeader className="table-header">
                <Col className="col col-1">STT</Col>
                <Col className="col col-2">Name</Col>
                <Col className="col col-3">Email</Col>
                <Col>
                    <Button onClick={() => navigate(-1)}>Back</Button>
                </Col>
            </TableHeader>
            {users &&
                users.map((user, index) => (
                    <Wrapper key={user._id}>
                        <TableRow>
                            <Col>{index + 1}</Col>
                            <Col>{user.name}</Col>
                            <Col>{user.email}</Col>
                            <Col>
                                <Button mode="remove" onClick={() => handleRemove(user._id)}>
                                    Delete
                                </Button>
                                <Button mode="edit">Edit</Button>
                            </Col>
                        </TableRow>
                    </Wrapper>
                ))}
        </React.Fragment>
    );
};
const User: FC = () => {
    const [user, setUser] = useState<Users[]>([]);
    const { loading, error, data } = useQuery(GET_USER);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    //

    //
    if (loading) return <Wrapper>Loading...</Wrapper>;
    //

    //
    return (
        <Wrapper className="mt-5 container mx-auto">
            <DisplayUser users={data?.Users} loading={loading} />
        </Wrapper>
    );
};

export default User;

const Wrapper = styled.div`
    li {
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
`;
const TableHeader = styled.li`
    background-color: #95a5a6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    padding: 5px;
    border-radius: 8px !important;
`;
const TableRow = styled.li`
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
`;
const Col = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    &:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
    }
`;
