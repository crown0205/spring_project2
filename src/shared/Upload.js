import React from "react";
import axios from "axios";
import {Button} from "../elements/index"

const Upload = (props) => {

  const fileInput = React.useRef();

  const selectFile = (e) => {
    // e.target은 input이죠!
    // input이 가진 files 객체를 살펴봅시다.
    console.log(e.target.files);
    // 선택한 파일이 어떻게 저장되어 있나 봅시다.
    console.log(e.target.files[0]);

    // ref로도 확인해봅시다. :)
    console.log(fileInput.current.files[0]);
  };

  const uploadFB = () => {
    axios({
      method:"get",
      url:"https://6253d1d889f28cf72b5335ef.mockapi.io/images",
    }).then((docs)=>{
      console.log(docs.data)
      //3번 dispatch로 액션함수한테 던짐
      // dispatch(loading(docs))
    })
  }

  return (
    <React.Fragment>
      <input type="file" ref={fileInput} onChange={selectFile} />
      <Button _onClick={uploadFB}>업로드하기</Button>
    </React.Fragment>
  );
};

export default Upload;