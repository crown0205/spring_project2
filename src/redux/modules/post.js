import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import "moment";
// import { api_token, api, test_api, test, test_api2, api_token2 } from "../../shared/api";
import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
// const EDIT_POST = "EDIT_POST";

const setPost = createAction(SET_POST, post_list => ({ post_list }));
const addPost = createAction(ADD_POST, post => ({ post })); //게시글 리덕스에 저장하기

// const editPost = createAction(EDIT_POST,(post_id, post)=>({post_id, post}));//게시글 수정

//초기값 설정
const initialState = {
  list: [],
};

const initialPost = {
  post_id: "",
  user_name: "",
  title: "",
  contents: "",
  image_url: "https://s3.ap-northeast-2.amazonaws.com/yk0825.shop/0325.jpg",
  createAt: moment().format("YYYY-MM-DD hh:mm:ss"), //게시글 작성 일시
  comment_cnt: 0,
};


//DB에 게시글 정보 저장하기
const addPostDB = formData => {
  return function (dispatch, getState, { history }) {

    // getState().user 에서 정보를 찾거나, 여러 루트 생각해보기.
    //  유저 정보 찾아오기.

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    axios({
      // method: "post",
      url: "https://6251cd887f7fa1b1dddf398b.mockapi.io/post",
      // url: "http://15.164.222.116/",   // 우리 서버~!!

      // data: formData,
      // headers: { "Content-Type": "multipart/form-data" },

      // DB에 연결 어떻게 할껀지... 
      // DB에 넘길때  유저 정보 찾아서 유저의 고유 아이디 값 같이 넘겨줘야된다.
      // 그래야 누구 게시물인지 파악 할수 있다.

    })
      .then(res => {
        console.log(res);




        // dispatch(imageAction.setPreview(null));  <== preview 값을 null로 바꿔줘야됨.
        // history.push("/");
        return;
      })
      .catch(err => {
        console.log("저장 실패", err);
        window.alert("나에게...희망을....줘......");
      });

    axios({
      method: "post",
      url: `https://6251cd887f7fa1b1dddf398b.mockapi.io/post_list`,
      data: formData,
    })
      .then(res => {
        console.log(res);
        console.log("done~!!");
      })
      .catch(err => {
        console.log("유저정보 조회 에러", err);
      });
  };
};

//DB 데이터 불러오기
const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    axios({
        method: "get",
        url: `https://6251cd887f7fa1b1dddf398b.mockapi.io/post`
      })
        .then((res) => {
          console.log(res)
          // post 정보 불러와서 main에 뿌리기.
          // params 이용해서 상세페이지 이동. == 연동?

          //  title , contents, url을 지정해서 뿌려줘야 됨.

          // detail로 가는 방법 
          // Index 찾아서 넣기
        })
        .catch((err) => {
          console.log("유저정보 조회 에러", err);
        });
  };
};

//reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, draft => {}),
    [ADD_POST]: (state, action) =>
      produce(state, draft => {
        draft.list.unshift(action.payload.post); //배열의 맨 앞에 넣어줘야해. push를 쓰면 배열의 뒤로 붙게됨
      }),
    // [EDIT_POST]:(state,action)=>produce(state,(draft)=>{

    // })
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  // editPost,
  getPostDB,
  addPostDB,
};
export { actionCreators };
