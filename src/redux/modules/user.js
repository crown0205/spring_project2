import axios from "axios";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";

// 액션 타입
const LOG_IN = "LOG_IN"; // 로그인
const LOG_OUT = "LOG_OUT"; // 로그아웃
const GET_USER = "GET_USER"; //회원정보 조회

// 액션 생성함수
const getUser = createAction(GET_USER, user => ({ user }));
const setUser = createAction(LOG_IN, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({ user }));

//  초기값
const initialState = {
  // user_id:"test@test.com",
  // user_name: "minggiject",
  is_login: false,
};

const token = getCookie("is_login");

// axios.get('').then((Response)=>{
//     console.log(Response.data);
// }).catch((Error)=>{
//     console.log(Error);
// })

// 요약 )
// axios.post("url", {
//   data: {
//     user_id: id,
//     user_name : user_name,
//     pwd: pwd,
//     user_profile: "",
//   }
// })

// // 회원가입
const signUpDB = (user_id, user_name, password, passwordConfirm) => {
  return function (dispatch, getState, { history }) {
    console.log({ user_id, password, user_name, passwordConfirm });
    console.log("회원가입!!!");

    axios({
      method: "post",
      url: "http://52.78.246.163/user/signup",
      // 회원가입 시 입력 데이터 보내기(보내기만 하면 끝)
      data: {
        user_id: user_id,
        user_name: user_name,
        password: password,
        passwordConfirm: passwordConfirm,
      },
    })
      .then(user => {
        console.log(user);
        window.alert("회원가입을 축하드립니다!");
        history.push("/login");
      })
      .catch(err => {
        console.log("회원가입 에러", err);
        window.alert("좌절.. 절망.. 어둠속으로");
      });
  };
};

// 로그인
const LoginDB = (user_id, password) => {
  return function (dispatch, getState, { history }) {
    console.log({ user_id, password });

    axios({
      method: "post",
      url: "http://52.78.246.163/user/login",
      data: {
        user_id: user_id,
        password: password,
      },
    })
      .then(res => {
        // // 통신 시 헤더에 default 값으로 저장
        // axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
        console.log(res.data);

        setCookie("is_login", res.data.token, 3);
        
        dispatch(
          setUser({
            user_id: res.data.user_id,
            user_name: res.data.user_name,
            uid: res.data._id,
          })
        );

        history.replace("/");
      })
      .catch(err => {
        console.log("우리 마주치지 말자... 제발... 어휴", err);
        return;
      });
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: `http://52.78.246.163/user/checkLogin`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res);
        // const user = {
        //   id: res.data.id,
        //   user_id: res.data.user_id,
        //   user_name: res.data.user_name,
        // };
        // dispatch(setUser(user));
      })
      .catch(err => {
        console.log("유저정보 조회 에러", err);
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    console.log("logOut 버튼 눌림");
    dispatch(logOut());
  };
};

// 리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, draft => {
        console.log();
        console.log(action);
        draft.user_id = action.payload.user.user_id;
        draft.user_name = action.payload.user.user_name;
        draft.uid = action.payload.user.uid;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  // setUser,
  logOutDB,
  LoginDB,

  loginCheckDB,
  signUpDB,
};

export { actionCreators };
