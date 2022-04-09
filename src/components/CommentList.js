//댓글 목록 중간 컴포넌트

import React from "react";
import {Grid,Image,Text} from "../elements";
const CommentList = (props) =>{
    return(
        <React.Fragment>
            <Grid>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
            </Grid>
        </React.Fragment>
    )
}
export default CommentList;

//비슷한 기능끼리는 한 컴포넌트 내에 넣어도 된다.
const CommentItem = (props)=>{

    const {user_name,user_id,post_id,contents,insert_dt} = props;
    return (
        <Grid padding="10px 20px">
            <Grid is_flex padding="0 0 10px 0">
                <Grid is_flex width="100px">
                    <Text bold="600px">{user_name}</Text>
                </Grid>
                <Grid is_flex margin="0px 10px">
                    <Text margin="0px">{contents}</Text>
                    <Text color="#7f7f7f">{insert_dt}</Text>
                </Grid>
            </Grid>
            <hr color="#fff"/>
        </Grid>
        
    )
}

//유저정보, 게시물 정보, 코멘트 내용, 작성시간
CommentItem.defaultProps = {
    user_name:"익명",
    user_id:"",
    post_id: 1,
    contents:"와 너무 예뻐요^^",
    insert_dt:"2022-04-09 18:00:00",
}
export {CommentItem}; //이미 위에서 export를 하고있기 때문에 꼭 안해도 된다