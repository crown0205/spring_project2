import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

import Header from "../components/Header";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import Footer from "../components/Footer";
import { Grid } from "../elements";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Grid >
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/write" exact component={PostWrite} />
        <Route path="/detail" exact component={PostDetail} />
        <Footer />
        </Grid>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
