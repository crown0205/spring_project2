import React from "react";

import Grid from "../elements/Grid";
import Image from "../elements/Image";

const Card = (props) => {
  return (
    <React.Fragment>
      {/* <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
        </Grid>
        <Grid padding="16px"></Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px"></Grid>
      </Grid> */}
      <Grid>
        <Grid padding="16px"></Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">제목을 입력하세요</Grid>
      </Grid>
    </React.Fragment>
  );
};
// props로 위의 정보들(use profile, name...) 받아올 때 주의점. props 정보가 없을때 화면 깨짐 등 오류
Card.defaultProps = {
  user_info: {
    user_name: "spring_project",
    user_profile:
      "https://cdn.pixabay.com/photo/2022/03/27/18/00/feather-7095765__340.jpg",
  },
  image_url:
    "https://cdn.pixabay.com/photo/2016/02/21/18/09/iceland-1214063__340.jpg",
  contents: "저작권 없는 이미지파일입니다.",
  comment_cnt: 15,
  insert_dt: "2022-04-09 10:00:00",
};
export default Card;
