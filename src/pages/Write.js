// import { defineLocale } from "moment";
import React from "react";
import Upload from "../shared/Upload";

import { Grid, Text, Input, Button, Image } from "../elements/index";

const Write = () => {
  return (
    <React.Fragment>
      <Grid bg="#ddd">
        <Grid margin="auto" width="40%" bg="#fff">
          <Grid padding="20px" center>
            <Text margin="20px" size="25px" Fw="600">
              게시글 작성
            </Text>
            <Input placeholder="제목을 입력해주세요." />
          </Grid>
          {/* 이미지 미리보기 */}
          <Grid padding="0px 0px 30px 0px">
            <Image
              shape="rectangle"
              src="https://s3.ap-northeast-2.amazonaws.com/yk0825.shop/imageupload.jpg"
            ></Image>
          </Grid>
          <Grid padding="16px">
            <Input
              label=""
              placeholder="내용을 입력해 주세요."
              multiLine
            ></Input>
          </Grid>
          <Grid padding="16px" is_flex>
            <Button
              padding="10px"
              width="48%"
              margin="0 10px 0 0"
              text="출간하기"
            ></Button>
            <Button padding="10px" width="48%" text="취소하기"></Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Write;
