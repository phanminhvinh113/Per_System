import { FC, useState } from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import { CREATE_NEW_USER, GET_USER } from "../graphql/userService";
import { Users } from "../components/interface";
import { useNavigate } from "react-router-dom";
import { backPage } from "../utils/constant";
import routes from "../utils/routes";

interface Props {}

const Register: FC<Props> = () => {
  const [inputUser, setInputUser] = useState<Users>({
    name: "",
    email: "",
    password: "",
  });
  const [CreateUser, { data, error }] = useMutation(CREATE_NEW_USER, {
    update(cache, { data: { CreateUser: newUser } }) {
      cache.modify({
        fields: {
          Users(existingUser: Users[]) {
            const newUerRef = cache.writeFragment({
              data: newUser,
              fragment: gql`
                fragment NewUser on Users {
                  name
                  email
                  _id
                }
              `,
            });
            return [...existingUser, newUerRef];
          },
        },
      });
    },
  });
  const handleRegisterUser = async () => {
    await CreateUser({
      variables: { inputUser },
    });
    console.log("error", error);
    console.log("response", data);
  };
  //
  const handleOnChaneInput = (e: any) => {
    setInputUser((prev: Users) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  //

  const naviagte = useNavigate();

  //
  return (
    <Wrapper className="container mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <button className="mb-4" onClick={() => naviagte(backPage.prevPage)}>
        Back Home
      </button>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <Input
          value={inputUser.name}
          type="text"
          placeholder="Nhap ten..."
          name="name"
          onChange={(e) => handleOnChaneInput(e)}
        />
        <Input
          value={inputUser.email}
          type="email"
          name="email"
          placeholder="Email..."
          onChange={(e) => handleOnChaneInput(e)}
        />
        <Input
          value={inputUser.password}
          type="password"
          name="password"
          placeholder="Password..."
          onChange={(e) => handleOnChaneInput(e)}
        />
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
