import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  FETCH_ALL_POSTS,
  FETCH_USERDATA,
  FETCH_COMMENTS
} from "./actionTypes";

import { API } from "../assets/constants";

export const fetchAllPosts = () => dispatch => {
  fetch(`${API}posts`)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_ALL_POSTS,
        payload: posts
      })
    );
};

export const fetchUserData = userId => dispatch => {
  fetch(`${API}users/${userId}`)
    .then(res => res.json())
    .then(user =>
      dispatch({
        type: FETCH_USERDATA,
        payload: user
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
