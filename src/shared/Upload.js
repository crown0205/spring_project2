import React from "react";
import axios from "axios";
import {Button} from "../elements/index"
import { useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useSelector } from "react-redux";

const Upload = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);

    //파일 읽기가 끝나면 발생하는 이벤트핸들러
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
      // console.log(reader.result);
    };
  };
  
  return (
    <React.Fragment>
      <input type="file" ref={fileInput} onChange={selectFile} />
    </React.Fragment>
  );
};

export default Upload;