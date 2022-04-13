import React, { useEffect } from "react";
import { Grid, Button, Text, Input, Image } from "../elements/index";

import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

import { useDispatch,useSelector } from "react-redux";
import { actionCreators as postActions} from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
import axios from "axios";

const PostDetail = (props) => {


  const dispatch=useDispatch();

//포스트 정보가 필요하다      
  const id=props.match.params.id;
  const comments=useSelector((state) => state.comment.list);

  const post_list = useSelector(store => store.post.list);
  const post_idx = post_list.findIndex(p => p.id === id);
  const post = post_list[post_idx];

    //새로고침 시 한번만 렌더링
    //commentloading 시작부분
  //1번 => comment.js 이동

  // React.useEffect(()=>{
  //   dispatch(commentActions.loadingCommentDB())
    
  //   if(!post){
  //     return;
  //   }
  //   dispatch(postActions.getOnePostDB(id));
  // },[]) 

  return (
    <React.Fragment>
      <Grid padding="120px 0px">
        <Grid margin="auto" width="40%" bg="#fff" padding="50px 20px">
          <Text Fw="600" size="34px" margin="0 0 5px 0">글 제목</Text>
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
          <hr/>
          <Grid margin="16px 0px 0px 0px" padding="10px 0px 0px 0px" bg="#ffeae4">
            {/* 댓글 작성란 */}
            <CommentWrite post_id={id}/>
            {/* 댓글 목록 */}
            <CommentList post_id={id}/>
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
