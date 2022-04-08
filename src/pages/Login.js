import React from "react";

import { Input, Grid, Text, Button } from "../elements/index";

const Login = props => {

  return (
    <React.Fragment>
      <React.Fragment>
      <Grid padding="16px 0" margin="" bg="#ffffff">
        <Grid width="80%" Maxw="500px" margin="auto">
          <Text size="30px" Fw="600" center margin="50px 0">
            로그인
          </Text>
          
          <Grid padding="10px 0">
            <Input label="아이디" placeholder="이메일을 입력해주세요" />
          </Grid>
          <Grid padding="10px 0">
            <Input label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요" />
          </Grid>

          <Grid width="100%" center margin="30px auto">
            <Button text="회원가입" padding="10px"/>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
    </React.Fragment>
  )
}

export default Login;