// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
// import { api, api_token , test_api, test_api2} from "../../shared/api";
// import axios from "axios";

// const GET_USER = "GET_USER";
// const SET_USER = "SET_USER";
// const LOG_OUT = "LOG_OUT";

// const getUser = createAction(GET_USER, (user) => ({ user }));
// const setUser = createAction(SET_USER, (nickname) => ({ nickname }));
// const logOut = createAction(LOG_OUT, (user) => ({ user }));

// const initialState = {
//   nickname: null,
//   is_login: false,
// };

// const loginFB = (nickname, password) => {
//   return async (dispatch, getState, { history }) => {
//     api_token
//       .post("/user/login", {
//         nickname: nickname,
//         password: password,
//       })
//       .then((res) => {
//         localStorage.setItem("is_login", res.data.token);
//         localStorage.setItem("nickname", res.data.nickname);
//         localStorage.setItem("userId", res.data.id);

//         dispatch(setUser(nickname));
//       })
//       .catch((err) => {
//         console.log(err.response)
//         window.alert(err.response.data.msg)

//       });
//   };
// };

// const signUpFB = (nickname, password, pwConfirm) => {

//   return async (dispatch, getState, { history }) => {
//     await api_token
//       .post("/user/signin", {
//         nickname: nickname,
//         password: password,
//         confirmPassword: pwConfirm,
//       })
//       .then((res) => {
//         console.log(res);
//         window.alert(res.data.msg + '\n 로그인을 진행해주세요☺️')
//         window.location.reload("/");
//       })
//       .catch((err) => {
//         window.alert(err.response.data.msg)
//       });
//   };
// };

// const logOutFB = () => {
//   return (dispatch, getState, { history }) => {
//     dispatch(logOut())
//     history.push('/')
//   }
// }

// export default handleActions(
//   {
//     [GET_USER]: (state, action) => produce(state, (draft) => {}),
//     [SET_USER]: (state, action) =>
//     produce(state, (draft) => {
//       draft.nickname = action.payload.nickname;
//       draft.is_login = true;
//     }),
//     [LOG_OUT]: (state, action) =>
//       produce(state, (draft) => {
//         localStorage.clear(); //localStorage 비워주는 작업
//         draft.nickname = null;
//         draft.is_login = false;
//       }),
//   },
//   initialState
// );

// const actionCreators = {
//   getUser,
//   setUser,
//   logOut,
//   logOutFB,
//   loginFB,
//   signUpFB,
// };

// export { actionCreators };
