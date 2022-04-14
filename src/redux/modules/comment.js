import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import { actionCreators as postActions } from "./post";
import axios from "axios";

//mock API

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

const DELETE_COMMENT = "DELETE_COMMENT";
//5번
//액션타입에서 리듀서로 던짐

const LOADING = "LOADING";

const setComment = createAction(SET_COMMENT, (commentlist) => ({
  commentlist
}));
const addComment = createAction(ADD_COMMENT, (commentWrap) => ({
  commentWrap,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentbox) => ({
  commentbox,
}));
//4번
//액션함수에서 액션타입으로 던짐

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

//초기값
const initialState={
  list:[
    {postId:"pos1",user_id:"test1",user_name:"리액트",comment: "너무 멋진 사진이군요"}
    ,{postId:"pos1",user_id:"test2",user_name:"노드",comment: "굳굳"}
  ],
    is_loading: true,
}
//2번
//postDetail에서 dispatch 받아서 미들웨어
//db에 데이터 던져주고 다시 db에서 데이터 받아서 dispatch로 리듀서에 던짐
//

//댓글 가져와서 리듀서로 던지기
//미들웨어

const loadingCommentDB = () =>{
  return function (dispatch,getState,{history}){
    axios({
      method:"get",
      url:"https://6253d1d889f28cf72b5335ef.mockapi.io/comments/",
    }).then((docs)=>{
      //3번 dispatch로 액션함수한테 던짐
      // dispatch(loading(docs))
      console.log(docs.data);
      dispatch(setComment(docs.data))
    })
    }
  }

const setCommentDB = (user_name) => {
  return function (dispatch, getState, { history }) {
    if (!user_name) {
      return;
    }
    dispatch(setComment(user_name));
  console.log(user_name);
  }

}
//댓글 입력하기
const addCommentDB = (user_name,comment) => {

  return function (dispatch, getState, { history }) {
    console.log(user_name,comment)
  // axios({
  //   method:"post",
  //   url:"https://6253d1d889f28cf72b5335ef.mockapi.io/comments",
  //   // url:"http://15.164.222.116/user/signup",
  // }).then((docs)=>{
  //   })
  //   .catch(err=>{
  //   console.log("댓글 정보를 가져올 수가 없네요!")
  // })
    const commentWrap = {
      postId:"pos3",user_id:"test3",user_name:user_name,comment:comment
    }
    dispatch(addComment(commentWrap))
  }
}
//댓글 삭제
const deleteCommentDB = (commentbox) => {
  return function (dispatch, getState, { history }) {
    axios({
      method:"get",
      url:"https://6253d1d889f28cf72b5335ef.mockapi.io/comments/",
    }).then((docs)=>{
      //3번 dispatch로 액션함수한테 던짐
      // dispatch(loading(docs))
      console.log(docs.data);
      dispatch(deleteComment(commentbox))
    })
    }
  }

//리듀서
export default handleActions(
  {
    //댓글불러오기
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.commentlist)
        draft.list = action.payload.commentlist;
      }),
      //댓글추가
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.commentWrap) 
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
      console.log(action);
      }),

    [DELETE_COMMENT]: (state, action) =>
    produce(state, (draft) => {
      let delete_comment_list = draft.list.filter(
        (comment) => comment.commentbox !== action.payload.commentbox
      );
      draft.list = [...delete_comment_list];
    }),
  },
  initialState);

const actionCreators = {
  setCommentDB,
  addCommentDB,
  setComment,
  addComment,
  loadingCommentDB,
  deleteCommentDB,
};

export { actionCreators };