import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Grid } from "../elements/index";
// import { actionCreator as postActions } from "../redux/modules/post";

import Card from "../components/Card";
// import Menu from "../component/Menu";
// import Likes from "../element/Likes";

const Main = () => {
  return (
    <React.Fragment>
      <Grid bg="#ddd" Minh="75vh">
        <Grid width="40%" margin="auto" bg="#fff" >
          <MainWrap>
            {/* <Menu /> */}
            <PostList>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </PostList>
          </MainWrap>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const MainWrap = styled.div``;

const PostList = styled.div`
  margin: 0 5%;
  @media screen and (max-width: 1024px) {
    margin: 0 1%;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
`;

export default Main;
