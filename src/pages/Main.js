import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Grid } from "../elements/index";
import { actionCreators as postActions } from "../redux/modules/post";

import Card from "../components/Card";
import { map } from "lodash";

// import Menu from "../component/Menu";
// import Likes from "../element/Likes";

const Main = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const post_list = useSelector(state => state.post.list);

  // console.log(post_list)

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostDB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid Minh="75vh">
        <Grid width="40%" margin="auto">
          <MainWrap>
            {/* <Menu /> */}
            <PostList>
              {post_list.map((item, index) => {
                console.log(item);
                return <Card key={`post${item.id}`} {...item} />;
              })}
              {/* <Card />
              <Card />
              <Card />
              <Card />
              <Card /> */}
            </PostList>
          </MainWrap>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const MainWrap = styled.div``;

const PostList = styled.div`
  margin: 0px -25%;
  padding-top: 225px;
  @media screen and (max-width: 1024px) {
    margin: 0px -45%;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
`;

export default Main;
