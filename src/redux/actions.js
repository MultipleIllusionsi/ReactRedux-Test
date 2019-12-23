import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  FETCH_ALL_POSTS,
  FETCH_ALL_POSTS_FAILURE,
  FETCH_USERDATA,
  FETCH_USERDATA_FAILURE,
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE
} from "./actionTypes";

import { API, customUser } from "../assets/constants";

export const fetchAllPosts = () => dispatch => {
  fetch(`${API}posts`)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_ALL_POSTS,
        payload: posts
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_ALL_POSTS_FAILURE,
        payload: err
      })
    );
};

export const fetchUserData = userId => dispatch => {
  userId === customUser.id
    ? dispatch({
        type: FETCH_USERDATA,
        payload: customUser
      })
    : fetch(`${API}users/${userId}`)
        .then(res => res.json())
        .then(user =>
          dispatch({
            type: FETCH_USERDATA,
            payload: user
          })
        )
        .catch(err =>
          dispatch({
            type: FETCH_USERDATA_FAILURE,
            payload: err
          })
        );
};

export const fetchComments = postId => dispatch => {
  fetch(`${API}comments?postId=${postId}`)
    .then(res => res.json())
    .then(comment =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comment
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_COMMENTS_FAILURE,
        payload: err
      })
    );
};

export const addPost = ({ data }) => ({
  type: ADD_POST,
  payload: data
});

export const removePost = id => ({
  type: REMOVE_POST,
  payload: { id }
});

export const editPost = ({ data }) => ({
  type: EDIT_POST,
  payload: data
});
