// import { defineLocale } from "moment";
import React from "react";
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import {Grid, Text, Input, Button,Image} from "../elements/index";
import axios from "axios";
import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props)=>{
    const dispatch = useDispatch();
    // const is_login = useSelector((state)=>state.user.is_login);
    //제목과 내용을 저장할 공간이 필요해
    const [title_box,setTitleBox] = React.useState(); //제목
    const [content_box,setContentBox] = React.useState(); //글 내용
    
    const {history} = props;
     //제목의 input값을 바꿔줄 친구
    const titleChange = (e)=>{//event
        setTitleBox(e.target.value);
    }
    //글 내용의 input값을 바꿔줄 친구
    const conChange = (e)=>{//event
        setContentBox(e.target.value);
    }
    //제목을 입력하지 않았을경우
    const titlepost = ()=>{
        console.log(title_box);
        console.log(content_box);
        if(!title_box){
            window.alert("제목을 입력해주세요.")
            return;
        }else if(!content_box){
            window.alert("내용을 입력해주세요.")
            return;
        }
        dispatch(postActions.addPostDB(content_box));
    }

    // if(!is_login){
    //     return(
    //         <Grid>
    //             <Text>로그인 후에만 글 작성이 가능합니다</Text>
    //             <Button _onClick={()=>{history.replace("/login")}}>로그인 하러가기</Button>
    //         </Grid>
    //     )
    // }
    return(
        <React.Fragment>
            <Grid Minh="75vh">
                <Grid margin="auto" width="40%" bg="#fff">
                    <Grid padding="140px 20px 20px 20px" center>
                        <Text margin="20px 0px 40px 0px" size="25px" Fw="600">게시글 작성</Text>
                    </Grid>    
                    <Grid padding="0px 20px">
                        <Input _onChange={titleChange} placeholder="제목을 입력해주세요."/>
                    </Grid>
                    <Grid padding="0px 20px 20px 20px">
                        <Upload/>
                    </Grid> 
                    {/* 이미지 미리보기 */}
                    <Grid padding="0px 20px 30px 20px">
                       
                        <Image shape="rectangle" src="https://s3.ap-northeast-2.amazonaws.com/yk0825.shop/imageupload.jpg"></Image>
                    </Grid>
                    <Grid padding="16px">
                        <Input label="" placeholder="내용을 입력해 주세요." multiLine
                            _onChange={conChange}
                        ></Input>
                    </Grid>
                    <Grid padding="16px" is_flex>
                        <Button padding="10px" width="48%" margin="0 10px 0 0" text="출간하기"
                            _onClick={titlepost}
                        ></Button>
                        <Button padding="10px" width="48%" text="취소하기"></Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default PostWrite;

