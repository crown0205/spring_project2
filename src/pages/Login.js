import React from "react";

import { Input, Grid, Text, Button } from "../elements/index";

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid bg="#ddd">
        <Grid
          padding="16px 0"
          width="40%"
          height="78vh"
          margin="auto"
          bg="#ffffff"
        >
          <Grid width="80%" Maxw="500px" margin="auto">
            <Text size="30px" Fw="600" center margin="50px 0">
              로그인
            </Text>

            <Grid padding="10px 0">
              <Input label="아이디" placeholder="이메일을 입력해주세요" />
            </Grid>
            <Grid padding="10px 0">
              <Input
                label="비밀번호"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </Grid>

            <Grid width="100%" center margin="30px auto">
              <Button text="회원가입" padding="10px" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
