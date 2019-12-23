import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  FETCH_ALL_POSTS
} from "../actionTypes";

let arrLength = 100;

const INITIAL_STATE = { posts: [], arrLength };

const posts = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_POSTS: {
      return { ...state, posts: payload };
    }

    case ADD_POST: {
      const { title, body } = payload;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            userId: 999,
            id: ++state.arrLength,
            title,
            body
          }
        ]
      };
    }

    case EDIT_POST: {
      const { title, body, id } = payload;
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === id ? { ...post, title, body } : post
        )
      };
    }

    case REMOVE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload.id)
      };
    }

    default:
      return state;
  }
};

export default posts;
