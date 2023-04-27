import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import routes from "../utils/routes";
import User from "./User";
import { Button } from "../components/StyledDefault/Button";
interface Props {}

const Home: FC<Props> = () => {
  return (
    <HomePage>
      <Link className="mt-52" to={routes.Register} preventScrollReset={true}>
        <Button>Register</Button>
      </Link>
      <Link to={routes.Card}>
        <Button>Card</Button>
      </Link>
      <NavLink to={routes.Manage_User}>
        <Button>ALL USER</Button>
      </NavLink>
      <Link to={routes.Comment}>
        <Button>Comment</Button>
      </Link>
    </HomePage>
  );
};

export default Home;
const HomePage = styled.div`
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-top: 100px;
  }
`;
