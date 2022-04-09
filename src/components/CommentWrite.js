import React from "react";

import {Grid,Input,Button} from "../elements";

const CommentWrite = (props) =>{
    return(
        <React.Fragment>
            
                <Grid padding="16px">
                    <Input placeholder="댓글을 입력해주세요."/>
                    <Button margin="10px 0px 0px 0px" padding="15px">댓글 남기기</Button>
                </Grid>
            
        </React.Fragment>
    )
}
export default CommentWrite;