import { gql } from "@apollo/client";

//
export const GET_USER = gql`
  query Users {
    Users {
      name
      email
      _id
    }
  }
`;

export const CREATE_NEW_USER = gql`
  mutation CreateUser($inputUser: CreateUserInput) {
    createUser(inputUser: $inputUser) {
      email
      name
      _id
    }
  }
`;
export const DELETE_USER = gql`
  mutation deleteUser($_id: ID!) {
    deleteUser(_id: $_id) {
      name
      email
    }
  }
`;
