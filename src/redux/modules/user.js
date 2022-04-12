import axios from "axios";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";

// 액션 타입
const LOG_IN = "LOG_IN"; // 로그인
const LOG_OUT = "LOG_OUT"; // 로그아웃
const GET_USER = "GET_USER"; //회원정보 조회

// 액션 생성함수
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//  초기값
const initialState = {
  user: "",
  is_login: false, 
};

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
const signUpDB = (user_id,  user_name, password, passwordConfirm) => {
  return function (dispatch, getState, { history }) {
    console.log({user_id, password, user_name, passwordConfirm})
    console.log("회원가입!!!")

    axios({
      method: "post",
      url: "http://15.164.222.116/user/signup",
      // 회원가입 시 입력 데이터 보내기(보내기만 하면 끝)
      data: {
        user_id: user_id,
        user_name: user_name,
        password: password,
        passwordConfirm: passwordConfirm
      },
    })
      .then((user) => {
        window.alert("회원가입을 축하드립니다!");
        history.push("/login");
      })
      .catch((err) => {
        console.log("회원가입 에러", err);
        window.alert("좌절.. 절망.. 어둠속으로");
      });
  };
};

// 로그인
const LoginDB = (userId, password) => {
  return function (dispatch, getState, { history }) {
    console.log({userId,password})
    axios({
      method: "post",
      url: "http://15.164.222.116/user/login",
      data: {
        userId : userId,
        password: password,
      },
    })
      .then((res) => {

        // // 서버로부터 받은 토큰 변수에 할당
        // const jwtToken = res.data.result.user.token;

        // // 서버로 부터 받은 토큰을 쿠키에 저장 (key:value 형태)
        // setCookie("is_login", jwtToken);

        // // 통신 시 헤더에 default 값으로 저장
        // axios.defaults.headers.common["Authorization"] = `${jwtToken}`;

        setCookie('is_login', res.data.id, 3);
        sessionStorage.setItem("token", "user.data.token에서 나온값")

        //  토큰을 어디어디에 넣어주는건가??....

        console.log({
          user_id: res.data.user_id,
          user_name: res.data.user_name,
          user_profile: res.data.user_profile,
          id: res.data.id,
        })

				dispatch(setUser({
          user_id: res.data.user_id,
          user_name: res.data.user_name,
          user_profile: res.data.user_profile,
          id: res.data.id,
        }));

        history.replace("/");
      })
      .catch((err) => {
        console.log("아이디 혹은 비밀번호가 일치하지 않습니다.");
        return;
      });
  };
};

// 로그인 후 회원 정보 조회 // 새로고침시 활성화 
const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    // 로그인 시 쿠키에 이미 is_login으로 토큰이 저장되어 있기 때문에

    //  서버연결 할때 토큰으로 다시 수정하기!!

    // const jwtToken = getCookie("token");
    // console.log(jwtToken);

    // 새로고침하면 헤더 default도 날라가기 때문에 다시 토큰을 달아준다.
    // 백엔드에서 헤더로 넘어온 Authorization 에서 토큰 값에서 토큰값을 뽑아주기로 함.
    // axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

    // console.log(axios.defaults.headers);

    axios({
      method: "post",
      url: `https://6251cd887f7fa1b1dddf398b.mockapi.io/user`
    })
      .then((res) => {
        console.log(res);
        const user = {
          id: res.data.id,
          user_id: res.data.user_id,
          user_name: res.data.user_name,
          user_profile: res.data.user_profile,
        };
        dispatch(setUser(user));
      })
      .catch((err) => {
        console.log("유저정보 조회 에러", err);
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    console.log("logOut 버튼 눌림")
    dispatch(logOut())
  };
};

// 리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
    produce(state, (draft) => {
        console.log(action)
        draft.user = action.payload.user.user_name;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
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
  signUpDB
};

export { actionCreators };