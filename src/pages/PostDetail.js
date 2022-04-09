import React from "react";
import { Grid, Button, Text, Input, Image } from "../elements/index";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Grid bg="#ddd" Minh="75vh">
        <Grid margin="auto" width="40%" bg="#fff" padding="50px 16px" Minh="75vh">
          <Text Fw="600" size="34px" margin="0 0 5px 0">
            상세 페이지
          </Text>
          <Text size="14px" color="#8b8b8b">
            user_name | <span>2022-04-09 10:00:00</span>
          </Text>

          <Grid margin="50px 0">
            <Grid>
              <Image
                shape="rectangle"
                src="https://i.pinimg.com/564x/ca/02/94/ca0294f0578167fcdf6df476d4645772.jpg"
                alt=""
                width="100%"
                height="400px"
              ></Image>
            </Grid>
          </Grid>

          <Grid>{/* comtents */}</Grid>

          <Grid width="100%">
            {/* comments write */}
            <Input width="80%" left />
            <Button
              text="게시"
              width="20%"
              padding="10px"
              height="41.7px"
            ></Button>
          </Grid>

          <Grid>
            {/* comments */}
            <Grid>
              <Grid bg="#eeeeee">
                <Text>user_name</Text>
              </Grid>
              <Grid>comment</Grid>
            </Grid>
          </Grid>

          <Grid>{/* btn */}</Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
