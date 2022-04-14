import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import "moment";
import { getCookie } from "../../shared/Cookie";
import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
// const EDIT_POST = "EDIT_POST";

const setPost = createAction(SET_POST, post_list => ({ post_list }));
const addPost = createAction(ADD_POST, post => ({ post })); //게시글 리덕스에 저장하기

// const editPost = createAction(EDIT_POST,(post_id, post)=>({post_id, post}));//게시글 수정
const token = getCookie("is_login")
// console.log(token)

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
const addPostDB = post => {
  return function (dispatch, getState, { history }) {
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    console.log(post.title)

    console.log("DB로 넘어간다.");
    axios({
      method: "post",
      url: "http://52.78.246.163/api/posts",  
      data:{
        title: post.title,
        content: post.content
      },
      headers: { authorization: `Bearer ${token}`}
    })
      .then(res => {
        console.log(res);
        console.log("포스터 등록 됨~~!?")

        // dispatch(imageAction.setPreview(null));  <== preview 값을 null로 바꿔줘야됨.
        history.push("/");
        return;
      })
      .catch(err => {
        console.log("저장 실패", err);
        window.alert("나에게...희망을....줘......");
      });

    // axios({
    //   method: "post",
    //   url: `https://6251cd887f7fa1b1dddf398b.mockapi.io/post_list`,
    //   data: formData,
    // })
    //   .then(res => {
    //     console.log(res);
    //     console.log("done~!!");
    //   })
    //   .catch(err => {
    //     console.log("유저정보 조회 에러", err);
    //   });
  };
};

//DB 데이터 불러오기
const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    const post_list = [];

    axios({
      method: "get",
      url: `http://52.78.246.163/api/main`, // 우리 서버
      // url: `http://localhost:4000/posts`, // mockApi
      // url: `https://6251cd887f7fa1b1dddf398b.mockapi.io/post`,
      // headers: { "Content-Type": "multipart/form-data" },
      // headers: {authorization: `Bearer ${token}`}

    })
      .then(posts => {
        // console.log(posts.data);
        console.log(posts)

        // posts.data.forEach((list) => {
        //   let _post = posts.data;

        //   let post = Object.keys(_post).reduce((acc, cur) => {
        //     console.log({acc, cur})
        //     return { ...acc, [cur]: _post[cur]}
        //   },{});
        //   post_list.push(post)
        // });

        // console.log(post_list)

        


        dispatch(setPost(posts.data));

        // const postDB = instance;
        // let all_list = [];
        // // let best_list = [];
        // // let normal_list = [];

        // postDB.get("/user/main").then(res => {
        //   console.log("!!!!!전체 LIST 서버에서 가져왔다!!!!!", res.data);
        //   res.data.forEach(list => {
        //     let post = Object.keys(list).reduce((acc, cur) => {
        //       return { ...acc, [cur]: list[cur] };
        //     }, {});
        //     all_list.push(post);
        //   });
        //   dispatch(setPost(all_list));
        // });

        // post 정보 불러와서 main에 뿌리기.
        // params 이용해서 상세페이지 이동. == 연동?

        //  title , contents, url을 지정해서 뿌려줘야 됨.

        // detail로 가는 방법
        // Index 찾아서 넣기
      })
      .catch(err => {
        console.log("유저정보 조회 에러", err);
      });
  };
};

//reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, draft => {
        console.log("여기~~!!!");
        console.log(action)


        draft.list = action.payload.post_list.result
      }),
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
