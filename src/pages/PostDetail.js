import React, { useEffect } from "react";
import { Grid, Button, Text, Input, Image } from "../elements/index";

import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import { getCookie } from "../shared/Cookie.js";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
import axios from "axios";

const PostDetail = props => {
  const dispatch = useDispatch();

  console.log(props.match.params.id);

  //포스트 정보가 필요하다
  const post_id = props.match.params.id;

  const comments = useSelector(state => state.comment.list);

  const post_list = useSelector(state => state.post.list);

  const post_idx = post_list.findIndex(p => p.id === post_id);

  const post = post_list[post_idx];

  console.log(post);


  React.useEffect(() => {
    console.log("useEffect~");
    dispatch(commentActions.loadingCommentDB());
  }, []);

  const is_login = useSelector(state => state.user.is_login);

  // 로그인시 유지 닉네임

  const is_session = getCookie("is_login") ? true : false;
  console.log(is_login, is_session);

  return (
    <React.Fragment>
      <Grid padding="120px 0px">
        <Grid margin="auto" width="40%" bg="#fff" padding="50px 20px">
          <Text Fw="600" size="34px" margin="0 0 5px 0">
            {/* {post.title} */}
          </Text>
          <Text size="14px" color="#8b8b8b">
            {post.user_name} | <span>{post.createAt}</span>
          </Text>
          <Grid margin="50px 0">
            <Grid>
              <Image
                shape="rectangle"
                src={post.img}
                alt=""
                width="100%"
                height="400px"
              ></Image>
            </Grid>
          </Grid>
          <Grid margin="0px 0px 50px 0px">
            <Text>{post.contents}</Text>
          </Grid>
          <hr />
          <Grid
            margin="16px 0px 0px 0px"
            padding="10px 0px 0px 0px"
            bg="#ffeae4"
          >
            {/* 댓글 작성란 */}
            {is_login && <CommentWrite post_id={post_id} />}

            {/* 댓글 목록 */}
            <CommentList post_id={post_id} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
