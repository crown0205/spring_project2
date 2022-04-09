import React from "react";

import { Input, Grid, Text, Button } from "../elements/index";

const Signup = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px 0" margin="" bg="#ffffff">
        <Grid width="80%" Maxw="500px" margin="auto">
          <Text size="30px" Fw="600" center margin="50px 0">
            회원가입
          </Text>
          <Grid padding="10px 0">
            <Input label="아이디" placeholder="이메일을 입력해주세요" />
          </Grid>
          <Grid padding="10px 0">
            <Input label="닉네임" placeholder="닉네임 입력해주세요" />
          </Grid>
          <Grid padding="10px 0">
            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </Grid>
          <Grid padding="10px 0">
            <Input
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요~!"
            />
          </Grid>

          <Grid width="100%" center margin="30px auto">
            <Button text="회원가입" padding="10px" />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
