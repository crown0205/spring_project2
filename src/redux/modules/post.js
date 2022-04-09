// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import { api_token, api, test_api, test, test_api2, api_token2 } from "../../shared/api";
// import axios from "axios";

// const GET_POST = "GET_POST";
// const ONE_POST = "ONE_POST";
// const UPDATE_POST = "UPDATE_POST";
// const ADD_POST = "ADD_POST";
// const DELETE_POST = "DELETE_POST";

// const LIKE_POST = "LIKE_POST";
// const DELETE_LIKE = "DELETE_LIKE";

// const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
// const onePost = createAction(ONE_POST, (one_post) => ({ one_post }));
// const updatePost = createAction(UPDATE_POST, () => ({}));
// const addPost = createAction(ADD_POST, (one_post) => ({ one_post }));
// const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));

// const likePost = createAction(LIKE_POST, (isLike, likeCnt) => ({ isLike, likeCnt }));
// const deleteLike = createAction(DELETE_LIKE, (isLike, likeCnt) => ({ isLike, likeCnt }));

// const initialState = {
//   postId: 1,
//   list: [],
//   one_post: {},
//   user_info: {
//     nickname: "nickname_t",
//   },
//   thumbnail: "",
//   title: "제목",
//   context: "내용",
//   dayBefore: "10일 전",
//   commentCnt: 100,
//   likeCnt: 21,
//   isLiking: false,
// };

// const getPostFB = () => {
//   return (dispatch, getState, { history }) => {
//     api_token
//       .get("/posts", {
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("is_login")}`,
//         }
//       })
//       .then((res) => {
//         const postDB = res.data;
//         const post_list = [];
//         postDB.forEach((p, i) => {
//           let list = {
//             postId: p.id,
//             nickname: p.user.nickname,
//             title: p.title,
//             thumbnail: p.thumbnail,
//             context: p.preview,
//             dayBefore: p.createdAt,
//             commentCnt: p.commentCnt,
//             likeCnt: p.likeCnt,
//           };
//           post_list.push(list);
//         });
//         dispatch(getPost(post_list));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// const getOnePostFB = (postId) => {
//   return async function (dispatch, getState, { history }) {
//     console.log("postId !! ", postId);

//     const is_local = localStorage.getItem("is_login") ? true : false;
//     const userId = localStorage.getItem("userId");

//     await api_token
//       .get(is_local ? `/post/${postId}?id=${userId}` : `/post/${postId}`,
//       {
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("is_login")}`,
//         }
//       })
//       .then((res) => {
//         dispatch(
//           onePost({
//             isLiking: res.data.isLiking,
//             title: res.data.post.title,
//             context: res.data.post.context,
//             createdAt: res.data.post.createdAt,
//             commentCnt: res.data.post.commentCnt,
//             likeCnt: res.data.post.likeCnt,
//             thumbnail: res.data.post.thumbnail,
//             userId: res.data.post.user.id,
//             nickname: res.data.post.user.nickname,
//           })
//         );
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// const specificListFB = (userId) => {
//     return (dispatch, getState, { history }) => {
//       const userId = localStorage.getItem("userId");
//       const post_idx = getState().post.list.findIndex((p) => p.user.id === userId);
//       api_token
//       .get(`/user/${userId}/posts`,{
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("is_login")}`,
//         }
//       })
//       .then((res) => {
//         console.log("특정 회원 게시물 조회 성공")
//       })
//       .catch((err) => {
//         console.log(err.response.data.msg);
//         console.log(err)
//       })
//     }
// }

// const addPostFB = (title, context, preview) => {
//   return async function (dispatch, getState, { history }) {
//     console.log("title !! ", title);
//     console.log("context !! ", context);
//     console.log("preview !! ", preview);

//     await axios
//       .post("http://velog.milagros.shop/api/post", {
//         title,
//         context,
//         preview,
//       },{
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("is_login")}`,
//         }
//       }
//       )
//       .then((res) => {
//         console.log("작성 res !! ", res.data);
//         history.replace("/");
//       })
//       .catch((err) => {
//         console.log("err !! ", err);
//       });
//   };
// };

// const updateOnePostFB = (postId, title, context, preview) => {
//   return async function (dispatch, getState, { history }) {
//     await api_token
//       .put(`/post/${postId}`, {
//         title,
//         context,
//         preview,
//       },{
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("is_login")}`,
//         }
//       })
//       .then((res) => {
//         console.log("수정하기 res !! ", res.data);
//         dispatch(updatePost());
//         history.replace(`/detail/${postId}`);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// const deletePostFB = (postId = null) => {
//   return (dispatch, getState, { history }) => {
//     api_token
//       .delete(`/post/${postId}`, {
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("is_login")}`,
//         }
//       })
//       .then((res) => {
//         console.log(res.data.msg);
//         window.alert("삭제가 완료되었습니다");
//         window.location.replace("/");
//       })
//       .catch((err) => {
//         window.alert(err);
//         console.log(err);
//       });
//   };
// };

// const LikePostFB = (postId, isLiking, likeCnt) => {
//   return (dispatch, getState, { history }) => {
//     api_token
//       .get(`/post/${postId}/likes`,{
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("is_login")}`,
//         }
//       })
//       .then((res) => {
//         let isLike = res.data.isLiking;
//         let likeCnt = res.data.post.likeCnt;
//         dispatch(likePost(isLike, likeCnt));
//       })
//       .catch((err) => {
//         console.log(err)
//       });
//   };
// };

// const DeleteLikeFB = (postId, isLiking, like_cnt) => {
//   return (dispatch, getState, { history }) => {
//     api_token
//       .delete(`/post/${postId}/likes`,{
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("is_login")}`,
//         }
//       })
//       .then((res) => {
//         console.log(res.data.msg);
//         let isLiking = res.data.isLiking;
//         let likeCnt = res.data.post.likeCnt;
//         dispatch(deleteLike(isLiking, likeCnt))
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

// export default handleActions(
//   {
//     [GET_POST]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_post = initialState.one_post;
//         draft.list = action.payload.post_list;
//       }),
//     [ONE_POST]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_post = action.payload.one_post;
//       }),

//     [UPDATE_POST]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_post = initialState.one_post;
//       }),

//     [DELETE_POST]: (state, action) =>
//       produce(state, (draft) => {
//         draft.list = draft.list.filter(
//           (p) => p.postId !== action.payload.postId
//         );
//       }),

//     [LIKE_POST]: (state, action) =>
//       produce(state, (draft) => {
//         console.log(action.payload)
//         draft.one_post.likeCnt = action.payload.likeCnt ;
//         draft.one_post.isLiking = action.payload.isLike;
//       }),

//     [DELETE_LIKE]: (state, action) =>
//       produce(state, (draft) => {
//         draft.one_post.likeCnt = action.payload.likeCnt ;
//         draft.one_post.isLiking = action.payload.isLike;
//       }),
//     },initialState
// );

// const actionCreator = {
//   onePost,
//   getPost,
//   deletePost,
//   likePost,
//   getPostFB,
//   getOnePostFB,
//   updateOnePostFB,
//   addPostFB,
//   deletePostFB,
//   LikePostFB,
//   DeleteLikeFB,
//   specificListFB
// };

// export { actionCreator };
