import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { Input, Grid, Text, Button } from "../elements/index";

const Signup = props => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [user_name, setUserName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  const signup = () => {
    console.log({ id, pwd, pwd_check, user_name });
    if (id === "" || pwd === "" || user_name === "" || pwd_check === "") {
      return window.alert("공란이 있습니다~ 전부 입력해주세요~");
    }
    if (pwd !== pwd_check) {
      return window.alert("비밀번호가 다릅니다~!");
    }

    dispatch(userActions.signUpDB(id, user_name, pwd, pwd_check));
  };

  return (
    <React.Fragment>
      <Grid height="75vh">
        <Grid
          width="40%"
          height="900px"
          padding="120px 20px 0px 20px"
          margin="auto"
          bg="#fff"
        >
          <Text size="30px" Fw="600" center margin="50px 0">
            회원가입
          </Text>
          <Grid padding="10px 0">
            <Input
              label="아이디"
              placeholder="이메일을 입력해주세요"
              _onChange={e => {
                setId(e.target.value);
              }}
            />
          </Grid>
          <Grid padding="10px 0">
            <Input
              label="닉네임"
              placeholder="닉네임 입력해주세요"
              _onChange={e => {
                setUserName(e.target.value);
              }}
            />
          </Grid>
          <Grid padding="10px 0">
            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              _onChange={e => {
                setPwd(e.target.value);
              }}
            />
          </Grid>
          <Grid padding="10px 0">
            <Input
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요~!"
              _onChange={e => {
                setPwdCheck(e.target.value);
              }}
            />
          </Grid>

          <Grid width="100%" center margin="30px auto">
            <Button
              text="회원가입"
              padding="10px"
              _onClick={() => {
                signup();
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
