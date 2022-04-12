import React from "react";
import styled from "styled-components";

import { Grid, Text, Button } from "../elements";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie } from "../shared/Cookie.js";
import { actionCreators as userActions } from "../redux/modules/user";


const Header = props => {
  const history = useHistory();
  const dispatch = useDispatch()

  console.log(useSelector(state => state.user.is_login));
  const is_login = useSelector(state => state.user.is_login);
  const user_name = useSelector(state => state.user.user);


  const is_session = localStorage.getItem("userName") ? true : false;
                                              // ⬆️ 여기에 저장소에 있는 키값을 넣어야된다.

  console.log(is_login, is_session)

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid bg="#ffe0e0" is_flex fixed height="0px">
          <Grid
            is_flex
            padding="3px 16px"
            width="55%"
            margin="auto"
            bg="#ffe0e0"
          >
            <Grid>
              <Font
                onClick={() => {
                  console.log("home");
                  history.replace("/");
                }}
              >
                <span>🌸</span>
                올봄엔
                <span>🌸</span>
              </Font>
            </Grid>
            <Grid is_flex>
              <Grid margin="0px 0px 0px 100px">
                <Text>{user_name}님 환영합니다</Text>
              </Grid>
              <Grid margin="0px 2px 0px 0px">
                <Button
                  text="글 작성"
                  width="90px"
                  margin="0px 4px 0px 0px"
                  _onClick={() => {
                    history.push("/posts");
                  }}
                ></Button>
                <Button
                  text="로그아웃"
                  width="90px"
                  _onClick={() => {
                    dispatch(userActions.logOutDB())
                    history.push("/");
                  }}
                ></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid bg="#ffe0e0" is_flex fixed height="0px">
        <Grid is_flex padding="3px 16px" width="55%" margin="auto" bg="#ffe0e0">
          <Grid>
            <Font
              onClick={() => {
                console.log("home");
                history.replace("/");
              }}
            >
              <span>🌸</span>
              올봄엔
              <span>🌸</span>
            </Font>
          </Grid>
          <Grid is_flex>
            <Grid margin="0px 0px 0px 100px">
              <Button
                text="로그인"
                width="90px"
                _onClick={() => {
                  console.log("됨??");
                  history.push("/login");
                }}
              ></Button>
              <Button
                text="회원가입"
                width="90px"
                _onClick={() => {
                  history.push("/signup");
                }}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Font = styled.div`
  font-family: "Jalnan";
`;

Header.defaultProps = {};

export default Header;
