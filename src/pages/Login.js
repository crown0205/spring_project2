import React from "react";

import { getCookie, setCookie } from "../shared/Cookie";
import { actionCreators as userActions } from "../redux/modules/user";
import _ from "lodash";

import { Input, Grid, Text, Button } from "../elements/index";
import { useDispatch } from "react-redux";

const Login = props => {
  const dispatch = useDispatch();

  const [userId, setId] = React.useState("");
  const [password, setPwd] = React.useState("");

  const login = () => {
    if (userId === "" || password === "") {
      window.alert("입력란이 비어있습니다~~!");
      return;
    }

    console.log({ userId, password });
    dispatch(userActions.LoginDB(userId, password));
  };

  return (
    <React.Fragment>
      <Grid>
        <Grid
          padding="120px 0px"
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
              <Input
                label="아이디"
                placeholder="이메일을 입력해주세요"
                _onChange={e => {
                  setId(e.target.value);
                }}
              />
            </Grid>
            <Grid padding="10px 0">
              <form>
                <Input
                  label="비밀번호"
                  // type="password"
                  placeholder="비밀번호를 입력해주세요"
                  // submit={()=>{}}
                  _onChange={e => {
                    setPwd(e.target.value);
                  }}
                />
              </form>
            </Grid>

            <Grid width="100%" center margin="30px auto">
              <Button
                text="로그인"
                padding="10px"
                _onClick={() => {
                  console.log("Login!!!");
                  login();
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
