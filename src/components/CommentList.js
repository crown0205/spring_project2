//댓글 목록 중간 컴포넌트

import React from "react";
import { Grid, Text, Button} from "../elements";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions} from "../redux/modules/comment";
import "moment";
import moment from "moment";

const CommentList = (props) => {

  // const postId = useSelector((state)=>state.comment.list[0].post_id);
  // console.log(postId);  

  //7번
  //리덕스에 저장된 데이터 불러오기
  //필요한 데이터 찾아내기
  // const comment_list = useSelector((state)=>state.comment.is_loading);


  const comment_box = useSelector((state)=>state.comment.list);
  console.log(comment_box);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(commentActions.loadingCommentDB())
  }, []);



  return (
    <React.Fragment>
      {/*8번 리덕스에서 뽑아낸 데이터 map으로 돌림 */}
      {comment_box && comment_box.map((list,k)=>{
          return <CommentItem key={k} {...list}/>//코멘트 아이디 
        })}
    </React.Fragment>
  );
};
CommentList.defaultProps = {
  post_id: null,
};
export default CommentList;

//비슷한 기능끼리는 한 컴포넌트 내에 넣어도 된다.

//댓글 하나
const CommentItem = (props) => {
  const {commentbox} = props;
  const dispatch = useDispatch()
  const deleteComment = () => {
    dispatch(commentActions.deleteCommentDB(commentbox));
  };
  const { postId, user_id, user_name,comment} = props; //리덕스에서 가져옴
  return (
    <Grid padding="10px 20px">
      <Grid is_flex padding="0 0 10px 0">
        <Grid is_flex width="130px">
          <Text bold="600">{user_name}</Text>
        </Grid>
        <Grid is_flex margin="0px 20px">
          <Text margin="0px">{comment}</Text>
          {/* <Text color="#7f7f7f">{insert_dt}</Text> */}
        </Grid>
        {/* 삭제 버튼 */}
        <Grid width="10%">
        
        <Button bg="#eebab5" color="#fff" _onClick={()=>{
          // window.alert("댓글이 삭제되었습니다!")
          deleteComment()
        }}>x</Button>
        </Grid>
      </Grid>
      <hr color="#fff" />
    </Grid>
  );
};
export { CommentItem };
