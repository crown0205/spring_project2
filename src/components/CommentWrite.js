import React from "react";

import {Grid,Input,Button} from "../elements";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const CommentWrite = (props) =>{
    // const history = useHistory();
    const dispatch = useDispatch();
    //텍스트를 저장할 공간이 필요해
    const [comment_box,setCommentBox] = React.useState();
    //댓글 작성시 넣을 유저 아이디 끌고옴
    const username = useSelector(((state)=>state.user.user_name));
    
    //input값을 바꿔줄 친구
    const onChange = (e)=>{//event
        setCommentBox(e.target.value);
    }

    //comment_box가 잘 들어가는지 확인
    const write = ()=>{
        //댓글을 입력하지 않았을 경우
        if(!comment_box){
            window.alert("댓글을 입력해주세요.")
            return;
        }
        dispatch(commentActions.addCommentDB(username,comment_box));
        // console.log(username,comment_box);
        setCommentBox("");//댓글 적은 거 입력하고 나면 리셋되도록
    }

    //우선 가상데이터에서 데이터들을 댓글에 뿌리는것까지는 됨
    //해결해야할 문제
    //post_id랑 댓글정보 같이 넘겨주기 => 게시물마다 댓글이 다를테니까 이 부분 생각해봐야함
    //DB 연결

    //로그인을 안했을 경우 댓글 입력창이 안보이도록 설정

    //페이지 별로 댓글이 별개로 달려야함
    return(
        <React.Fragment>
                <Grid padding="16px">
                    <Input placeholder="댓글을 입력해주세요." _onChange={onChange} value={comment_box} onSubmit={write} is_onSubmit/>
                    <Button margin="10px 0px 0px 0px" padding="15px" _onClick={write}>댓글 남기기</Button>
                </Grid>
        </React.Fragment>
    )
}
export default CommentWrite;