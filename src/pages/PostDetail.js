import React from "react";
import { Grid, Button, Text, Input, Image } from "../elements/index";

<<<<<<< HEAD
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
const PostDetail = props => {
  return (
    <React.Fragment>
      <Grid bg="#ddd">

        <Grid margin="auto" width="40%" bg="#fff" padding="50px 20px">
          <Text Fw="600" size="34px" margin="0 0 5px 0">글 제목</Text>
=======
const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Grid bg="#ddd" Minh="75vh">
        <Grid margin="auto" width="40%" bg="#fff" padding="50px 16px" Minh="75vh">
          <Text Fw="600" size="34px" margin="0 0 5px 0">
            상세 페이지
          </Text>
>>>>>>> 17515a37d439713418a7ce8dd84d8c4bf62747b8
          <Text size="14px" color="#8b8b8b">
            user_name | <span>2022-04-09 10:00:00</span>
          </Text>

          <Grid margin="50px 0">
            <Grid>
              <Image
                shape="rectangle"
                src="https://i.pinimg.com/564x/ca/02/94/ca0294f0578167fcdf6df476d4645772.jpg"
                alt=""
                width="100%"
                height="400px"
              ></Image>
            </Grid>
          </Grid>

          <Grid margin="0px 0px 50px 0px">
            <Text>PostWrite.js에서 작성한 input 내용</Text>
          </Grid>
<<<<<<< HEAD
          <hr/>
          <Grid margin="16px 0px 0px 0px" padding="10px 0px 0px 0px" bg="#ffeae4">
            {/* 댓글 작성 */}
            <CommentWrite/>
            {/* 댓글 목록 */}
            <CommentList/>
            
=======

          <Grid>
            {/* comments */}
            <Grid>
              <Grid bg="#eeeeee">
                <Text>user_name</Text>
              </Grid>
              <Grid>comment</Grid>
            </Grid>
>>>>>>> 17515a37d439713418a7ce8dd84d8c4bf62747b8
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
