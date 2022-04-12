import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

import Header from "../components/Header";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Footer from "../components/Footer";
import { Grid } from "../elements";
import { getCookie } from "./Cookie";

function App() {
  const dispatch = useDispatch();

  const is_session = sessionStorage.getItem("token") ? true : false;

  console.log(is_session);
  console.log(getCookie("is_login"))

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Grid>
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/posts" exact component={PostWrite} />
          <Route path="/detail" exact component={PostDetail} />
          <Footer />
        </Grid>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
