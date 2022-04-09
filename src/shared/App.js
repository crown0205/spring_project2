import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostDetail from "../pages/PostDetail";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/detail" exact component={PostDetail} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
