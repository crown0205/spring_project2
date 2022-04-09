import React from "react";
import styled from "styled-components";

import { Grid, Text, Button } from "../elements";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  // return (
  //   <React.Fragment>
  //     <Grid bg="#ddd" fixed>
  //       <Grid is_flex padding="3px 16px" width="40%" margin="auto" bg="#ffe0e0">
  //         <Grid>
  //           <Text margin="0px" size="25px" bold>
  //             <F
  //               onClick={() => {
  //                 console.log("home");
  //                 history.replace("/");
  //               }}
  //             >
  //               올봄엔
  //             </F>
  //           </Text>
  //         </Grid>
  //         <Grid width="auto" is_flex>
  //           <Button
  //             text="로그인"
  //             width="90px"
  //             _onClick={() => {
  //               console.log("됨??");
  //               history.push("/login");
  //             }}
  //           ></Button>
  //           <Button
  //             text="회원가입"
  //             width="90px"
  //             _onClick={() => {
  //               history.push("/signup");
  //             }}
  //           ></Button>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </React.Fragment>
  // );

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
              <Text>user_name님 환영합니다</Text>
            </Grid>
            <Grid margin="0px 2px 0px 0px">
              <Button
                text="글 작성"
                width="90px"
                margin="0px 4px 0px 0px"
                _onClick={() => {
                  history.push("/write");
                }}
              ></Button>
              <Button
                text="로그아웃"
                width="90px"
                _onClick={() => {
                  history.replace("/");
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
