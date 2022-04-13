import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Image from "../elements/Image";

import { useHistory } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <DIV
        onClick={() => {
          history.push(`/detail/${props.post_id}`);
        }}
      >
        <Grid>
          <PostTime>{props.createAt}</PostTime>
          <Grid padding="16px"></Grid>
          <Grid>
            
            <Image shape="rectangle" height="60%" src={props.img} />

            <Contents>

              <Title>{props.title}</Title>

              <PostContent>{props.contents}</PostContent>
              <Bottom>
                <Profile>
                  <span>
                    by <b>{props.user_name}</b>
                  </span>
                </Profile>
                <LikeCntWrap>{props.likeCnt}개</LikeCntWrap>
              </Bottom>
            </Contents>
          </Grid>
        </Grid>
      </DIV>
    </React.Fragment>
  );
};
// props로 위의 정보들(use profile, name...) 받아올 때 주의점. props 정보가 없을때 화면 깨짐 등 오류
Card.defaultProps = {
  nickname: "initial_nickname",
  title: "initial_title",
  thumbnail: "http://www.ipon.co.kr/common/img/default_profile.png",
  context: "initial_context",
  createAt: "initial_2022-02-04 16:20:00",
  dayBefore: "7일전",
  likeCnt: 1000,
  postId: "1234567",
};

const DIV = styled.div`
  margin: auto;
  border: 1px solid #eee;
  border-radius: 8px;
  min-width: 150px;
  height: 550px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 15px 0px;
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: translateY(-10px);
  }
  @media screen and (max-width: 1024px) {
    min-width: 350px;
  }
  margin-bottom: 40px;
`;

const Title = styled.div`
  white-space: initial;
  font-size: 1rem;
  margin: 0px 0px 0.6rem;
  font-weight: bold;
  width: 296;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Contents = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const PostContent = styled.div`
  width: 296px;
  height: 110px;
  overflow: hidden;
  word-break: break-all; //줄바꿈
`;

const PostTime = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #ccc;
  margin: 0rem 0rem 1rem 1rem;
`;

const Bottom = styled.div`
  font-size: 0.75rem;
  display: inline-flex;
  border-top: 1px solid #eee;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 50px;
  /* position: absolute; */
  bottom: 0px;
`;

const Profile = styled.div`
  display: inline-flex;
  align-items: center;
`;

const LikeCntWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default Card;
