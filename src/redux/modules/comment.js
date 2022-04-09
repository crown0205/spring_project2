// import {createAction, handleActions} from "redux-actions";
// import {produce} from "immer";
// import "moment";
// import moment from "moment";
// import {api, api_token, test} from "../../shared/api";

// const GET_COMMENT = "GET_COMMENT";
// const ADD_COMMENT = "ADD_COMMENT";
// const DELETE_COMMENT = "DELETE_COMMENT";

// const LOADING = "LOADING";

// const getComment = createAction(GET_COMMENT, (post_id, comment_list) => ({post_id, comment_list}));
// const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({post_id, comment}));

// const loading = createAction(LOADING, (is_loading) => ({is_loading}));

// const initialState = {
//     list: {},
//     is_loading: false,
// }

// const getCommentFB = (post_id = null) => {
//     return async function(dispatch, getState, {history}){

//         console.log('댓글 조회 post_id !! ',post_id);

//         if(!post_id) {
//             return;
//         }

//         await api_token.get(`/post/${post_id}/comments`,{
//             headers: {
//               authorization: `Bearer ${localStorage.getItem("is_login")}`,
//             }
//           })
//         .then((res) => {

//             // console.log('댓글 리스트 res !! ', res.data.commentsParents);

//             const commentList = res.data.commentsParents.reduce((acc, cur, i) => {

//                 acc.push({
//                     commentId: cur.id,
//                     userId: cur.userId,
//                     commentBody: cur.commentBody,
//                     createdAt: cur.createdAt,
//                     parentsId: cur.parentsId,
//                     updatedAt: cur.updatedAt,
//                     nickname: cur.user !== null ? cur.user.nickname : "닉네임없음",
//                 });

//                 return acc;
//             }, []);

//             dispatch(getComment(post_id, commentList))

//         })
//         .catch((err) => {
//             console.log(err);
//         });

//     }
// }

// const addCommentFB = (post_id, contents) => {
//     return async function(dispatch, getState, {history}){
//         await api_token.post(`/post/${post_id}/comment/${0}`,
//             {
//                 commentBody: contents,
//                 userId: localStorage.getItem('userId'),
//             },
//             {
//                 headers: {
//                   authorization: `Bearer ${localStorage.getItem("is_login")}`,
//                 }
//               }
//         ).then((res) => {
//             const preList = getState().comment.list[post_id];
//             console.log('addCommentFb !! ', res.data.comment);

//             const newComment = {
//                 commentId: res.data.comment.id,
//                 userId: res.data.comment.userId,
//                 commentBody: res.data.comment.commentBody,
//                 createdAt: res.data.comment.createdAt,
//                 parentsId: res.data.comment.parentsId,
//                 updatedAt: res.data.comment.updatedAt,
//                 nickname: localStorage.getItem('nickname'),
//             };

//             const addList = [...preList, newComment];

//             dispatch(getComment(post_id, addList))

//         }).catch((err) => {
//             console.log(err);
//         })

//     }
// }

// const updateCommentFB = (postId, commentId, contents) => {
//     return async function(dispatch, getState, {history}) {
//         await api_token.patch(`/post/${postId}/comment/${commentId}`,
//             {
//                 commentBody: contents,
//             },
//             {
//                 headers: {
//                   authorization: `Bearer ${localStorage.getItem("is_login")}`,
//                 }
//               }
//         ).then((res) => {

//             const preList = getState().comment.list[postId];
//             const upDateList = preList.reduce((arr, cur, i) => {
//                 if(cur.commentId === commentId){
//                     arr.push({...cur, commentBody: contents});
//                 }else {
//                     arr.push(cur);
//                 }

//                 return arr;
//             }, []);
//             dispatch(getComment(postId, upDateList));

//         }).catch((err) => {
//             console.log(err);
//         })

//     }
// }

// const removeCommentFB = (postId, commentId) => {
//     return async function(dispatch, getState, {history}) {
//         await api_token.patch(`/post/${postId}/comment/${commentId}/disabled`,
//         {
//             headers: {
//               authorization: `Bearer ${localStorage.getItem("is_login")}`,
//             }
//           }
//         ).then((res) => {
//             const preList = getState().comment.list[postId];
//             const deleteList = preList.filter((item) => item.commentId !== commentId);
//             console.log('removeCommentFB !! ', res);

//             dispatch(getComment(postId, deleteList));

//         }).catch((err) => {
//             console.log(err);
//         })
//     }
// }

// export default handleActions(
//     {
//         [GET_COMMENT]: (state, action) => produce(state, (draft) => {
//             draft.list[action.payload.post_id] = action.payload.comment_list;
//         }),
//         [ADD_COMMENT]: (state, action) => produce(state, (draft)=> {

//         }),
//         [LOADING]: (state, action) =>
//         produce(state, (draft) => {
//           draft.is_loading = action.payload.is_loading;
//         })
//     },
//     initialState
//   );

//   const actionCreators = {
//     getCommentFB,
//     getComment,
//     addComment,
//     addCommentFB,
//     updateCommentFB,
//     removeCommentFB,
//   };

//   export { actionCreators };
