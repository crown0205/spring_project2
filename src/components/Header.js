import React from "react";

import { Grid, Text, Button } from "../elements";

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid bg="#ddd">
        <Grid is_flex padding="3px 16px" width="40%" margin="auto" bg="#ffb1ab">
          <Grid>
            <Text margin="0px" size="25px" bold>
              올봄엔
            </Text>
          </Grid>
          <Grid width="auto" is_flex>
            <Button margin="10px" text="로그인" width="80px"></Button>
            <Button text="회원가입" width="80px"></Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  //   return (
  //     <React.Fragment>
  //       <Grid is_flex padding="3px 16px">
  //         <Grid>
  //           <Text margin="0px" size="25px" bold>
  //             올봄엔
  //           </Text>
  //         </Grid>
  //         <Grid width="auto" is_flex>
  //           <Button text="내 정보" width="80px"></Button>
  //           <Button text="알림" width="80px"></Button>
  //           <Button text="로그아웃" width="80px"></Button>
  //         </Grid>
  //       </Grid>
  //     </React.Fragment>
  //   );
};

Header.defaultProps = {};

export default Header;
