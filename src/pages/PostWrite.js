// import { defineLocale } from "moment";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Text, Input, Button, Image } from "../elements/index";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as postActions } from "../redux/modules/post";
import { useHistory } from "react-router-dom";

const PostWrite = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const preview = useSelector(state => state.image.preview);
  const formData = new FormData();
  const fileInput = React.useRef(null);
  const is_login = useSelector((state)=>state.user.is_login);


  // useEffect(()=>{
  //   dispatch(postActions.getPostDB())
  // },[])



  const [post, setPost] = React.useState({
    title: "",
    content: "",
  });

  console.log(post)

  const handleForm = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };


  // 파일 선택 하는 거 처리하는 곳
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);

    //파일 읽기가 끝나면 발생하는 이벤트핸들러
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };


  const postingBox = () => {
    dispatch(postActions.addPostDB(post));
  };

  return (
    <React.Fragment>
      <Grid Minh="75vh">
        <Grid margin="auto" width="40%" bg="#fff">
          <Grid padding="255px 20px 20px 20px" center>
            <Text margin="20px 0px 40px 0px" size="25px" Fw="600">
              게시글 작성
            </Text>
          </Grid>
          <Grid padding="0px 20px 20px 20px">
            <Input
              _onChange={handleForm}
              name="title"
              placeholder="제목을 입력해주세요."
              value={post.title}
            />
          </Grid>
          <Grid padding="0px 20px 20px 20px">
          <input type="file" ref={fileInput} onChange={selectFile} />
          </Grid>
          {/* 이미지 미리보기 */}
          <Grid padding="0px 20px 30px 20px">
            <Image
              shape="rectangle"
              src={
                preview
                  ? preview
                  : "https://s3.ap-northeast-2.amazonaws.com/yk0825.shop/imageupload.jpg"
              }
            ></Image>
          </Grid>
          <Grid padding="16px">
            <Input
              label=""
              placeholder="내용을 입력해 주세요."
              multiLine
              _onChange={handleForm}
              name="content"
              value={post.content}
            ></Input>
          </Grid>
          <Grid padding="16px" is_flex>
            <Button
              padding="20px"
              width="48%"
              margin="0 10px 0 0"
              text="출간하기"
              _onClick={postingBox}
            ></Button>
            <Button
              padding="20px"
              width="48%"
              text="취소하기"
              _onClick={() => {
                history.push("/");
              }}
            ></Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default PostWrite;
