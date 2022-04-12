// import { defineLocale } from "moment";
import React from "react";
import Upload from "../shared/Upload";
import { useSelector, useDispatch } from "react-redux";
import {Grid, Text, Input, Button,Image} from "../elements/index";
// import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as postActions } from "../redux/modules/post";
import { useHistory } from "react-router-dom";

const PostWrite = (props)=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const preview = useSelector((state)=>state.image.preview);
    const fileInput = React.useRef(null);
    // const is_login = useSelector((state)=>state.user.is_login);
    //제목과 내용을 저장할 공간이 필요해

    const [post, setPost] = React.useState({
        title: "",
        content: "",
      }); 
      
    const handleForm = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };
  
    const formData = new FormData();

    if(fileInput.current){

        formData.append('imageUrl', fileInput.current.files[0] )
        formData.append('title', post.title)
        formData.append('content', post.content)

    }
    for (var pair of formData.entries()) { 
        console.log(pair[0] + ", " + pair[1]); 
    }

    const postingBox = ()=>{
        
        if (post.title === "" || post.content === "" || preview === null) {
            window.alert("내용을 추가해 주세요.");
            return;
          }
        dispatch(postActions.addPostDB(formData));

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
                    <Grid padding="0px 20px 20px 20px">
                        <Input _onChange={handleForm} name="title" placeholder="제목을 입력해주세요." value={post.title}/>
                    </Grid>
                    <Grid padding="0px 20px 20px 20px">
                        <Upload/>
                    </Grid> 
                    {/* 이미지 미리보기 */}
                    <Grid padding="0px 20px 30px 20px">
                        <Image shape="rectangle" 
                        src={preview ? preview : "https://s3.ap-northeast-2.amazonaws.com/yk0825.shop/imageupload.jpg"}></Image>
                    </Grid>
                    <Grid padding="16px">
                        <Input label="" placeholder="내용을 입력해 주세요." multiLine
                            _onChange={handleForm} name="content" value={post.content} 
                        ></Input>
                    </Grid>
                    <Grid padding="16px" is_flex>
                        <Button padding="20px" width="48%" margin="0 10px 0 0" text="출간하기"
                            _onClick={postingBox}
                        ></Button>
                        <Button padding="20px" width="48%" text="취소하기" _onClick={()=>{
                            history.push('/')
                        }}></Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default PostWrite;

