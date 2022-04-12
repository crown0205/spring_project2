import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import { actionCreators as postActions } from "./post";
import axios from "axios";

//mock API

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

//5번
//액션타입에서 리듀서로 던짐

const LOADING = "LOADING";

const setComment = createAction(SET_COMMENT, (post_id,comments) => ({
  post_id,
  comments,
}));
const addComment = createAction(ADD_COMMENT, (commentWrap) => ({
  commentWrap,
}));

//4번
//액션함수에서 액션타입으로 던짐

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState={
  list:[
    {post_id:"pos1",comment_id:"com1",user_name:"리액트",comment: "너무 멋진 사진이군요"}
    ,{post_id:"pos1",comment_id:"com1",user_name:"노드",comment: "와 정말 예쁘네요^^"}],
    is_loading: true,
}


//2번
//postDetail에서 dispatch 받아서 미들웨어
//db에 데이터 던져주고 다시 db에서 데이터 받아서 dispatch로 리듀서에 던짐
//

const loadingCommentDB = () =>{
  return function (dispatch,getState,{history}){
    axios({
      method:"get",
      url:"https://6253d1d889f28cf72b5335ef.mockapi.io/comments",
    }).then((docs)=>{
      //3번 dispatch로 액션함수한테 던짐
      dispatch(loading(docs))

      // console.log(docs.data);
      // let list=[];
      // console.log(docs.data.length);

      // docs.forEach((doc)=>{
      //   console.log(doc)
      //   list.push({...doc.data})
      // })
      // console.log(list);

      // const test1 = doc.data[0].comment
      // const test2 = doc.data[0].user_name
      // console.log(test1)
      // console.log(test2)

    })
  }
}

const setCommentFB = (user_name) => {
  return function (dispatch, getState, { history }) {
    if (!user_name) {
      return;
    }
    dispatch(setComment(user_name));
  console.log(user_name);
  }

}
//댓글 입력하기
const addCommentDB = (post_id=null) => {

  return function (dispatch, getState, { history }) {
  //   const post={
  //     post_id:post_id,comment_id:"com1",user_name:"익명",comment:commentWrap
  //   }
  //   dispatch(addComment(post));
  // }
  axios({
    method:"get",
    url:"https://6253d1d889f28cf72b5335ef.mockapi.io/comments",
  }).then((docs)=>{
    let list=[];
    docs.forEach((doc)=>{
      list.push({...doc.data(), id:doc.id});
    })
    dispatch(setComment(post_id,list));
  }).catch(err=>{
    console.log("댓글 정보를 가져올 수가 없네요!")
  })
  }
}

//리듀서
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.comments);
        console.log(...action.payload.comments)
        draft.list = draft.list.reduce((acc, cur) => {

          if (acc.findIndex((a) => a.commentId === cur.commentId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.commentId === cur.commentId)] = cur;
            return acc;
          }
        }, []);
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.commentWrap);
      }),

    //6번
    //서버에서 받은 데이터 리덕스에 저장
    //필요한 데이터 정제해서 리덕스에 저장
    //commentList.js로 이동
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        console.log(state,action)
        draft.is_loading = action.payload.is_loading;
        draft.list = action.payload.data;
      }),
  },
  initialState);

const actionCreators = {
  setCommentFB,
  addCommentDB,
  setComment,
  addComment,
  loadingCommentDB
};

export { actionCreators };