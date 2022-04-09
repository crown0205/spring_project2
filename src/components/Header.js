import React from "react";

import { Grid, Text, Button } from "../elements";
import { useHistory } from "react-router-dom";

const Header = props => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Grid bg="#ddd">
        <Grid is_flex padding="3px 16px" width="40%" margin="auto" bg="#ffe0e0">
          <Grid>
            <Text margin="0px" size="25px" bold>
              <span
                onClick={() => {
                  console.log("home");
                  history.replace("/");
                }}
              >
                올봄엔
              </span>
            </Text>
          </Grid>
          <Grid width="auto" is_flex>
            <Button
              text="로그인"
              width="80px"
              _onClick={() => {
                console.log("됨??");
                history.push("/login");
              }}
            ></Button>
            <Button
              text="회원가입"
              width="80px"
              _onClick={() => {
                history.push("/signup");
              }}
            ></Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  // return (
  //   <React.Fragment>
  //     <Grid is_flex padding="3px 16px">
  //       <Grid>
  //         <Text margin="0px" size="25px" bold>
  //           올봄엔
  //         </Text>
  //       </Grid>
  //       <Grid width="auto" is_flex>
  //         <Button text="글쓰기" width="80px" _onClick={() => {
  //           history.push("/write")
  //         }}></Button>
  //         <Button text="로그아웃" width="80px"></Button>
  //       </Grid>
  //     </Grid>
  //   </React.Fragment>
  // );
};

Header.defaultProps = {};

export default Header;
