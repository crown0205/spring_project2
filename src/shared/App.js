import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";

import Header from "../components/Header";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Footer from "../components/Footer";
import { Grid } from "../elements";
import { useDispatch } from "react-redux";

function App() {
const dispatch = useDispatch()

const is_session = localStorage.getItem("userName") ? true : false ;

console.log(is_session)

React.useEffect(() => {
  if (is_session) {
    console.log("됨")
    dispatch(userActions.loginCheckDB());
  }
}, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Grid >
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/posts" exact component={PostWrite} />
        <Route path="/detail" exact component={PostDetail} />
        <Footer />
        </Grid>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
