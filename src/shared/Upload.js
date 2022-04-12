import React from "react";
import axios from "axios";
import {Button} from "../elements/index"
import { useDispatch } from "react-redux";
import { createActions as imageActions } from "redux-actions";
const Upload = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();

  const selectFile = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);

    console.log(file);
    console.log(reader);
    //파일 읽기가 끝나면 발생하는 이벤트핸들러
    reader.onloadend = () => {
      // dispatch(imageActions.setPreview(reader.result));
      console.log(reader.result);
    };
  };

  const uploadDB = () => {
    // axios({
    //   method:"get",
    //   url:"https://6253d1d889f28cf72b5335ef.mockapi.io/images",
    // }).then((docs)=>{
    //   // console.log(docs.data)
    //   // dispatch(loading(docs))
    // })
  }

  return (
    <React.Fragment>
      <input type="file" ref={fileInput} onChange={selectFile} />
      <Button _onClick={uploadDB}>업로드하기</Button>
    </React.Fragment>
  );
};

export default Upload;