import React from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import routes from "./utils/routes";
import styled from "styled-components";
import Register from "./Page/Register";
import Home from "./Page/HomePage";
import Card from "./Page/Card";
import User from "./Page/User";
import CommentPage from "./components/Comment/Comment";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path={routes.Home} Component={Home} />
          <Route path={routes.Manage_User} Component={User} />
          <Route path={routes.Register} Component={Register} />
          <Route path={routes.Card} Component={Card} />
          <Route path={routes.Comment} Component={CommentPage} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.div``;
