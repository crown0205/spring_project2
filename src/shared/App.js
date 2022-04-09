import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import Main from "../pages/Main";
// import PostList from "../pages/PostList";

import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        {/* <Route path="/" exact component={PostList} /> */}
        <Route path="/" exact/>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
