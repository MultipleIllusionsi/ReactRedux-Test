import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  FETCH_ALL_POSTS
} from "../actionTypes";

const INITIAL_STATE = { posts: [] };

const posts = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_POSTS: {
      return {
        posts: payload,
        length: payload.length
      };
    }

    case ADD_POST: {
      const { title, body } = payload;
      return {
        posts: [
          ...state.posts,
          {
            userId: 999,
            id: ++state.posts.length,
            title,
            body
          }
        ]
      };
    }

    case EDIT_POST: {
      const { title, body, id } = payload;
      return {
        posts: state.posts.map(post =>
          post.id === id ? { ...post, title, body } : post
        )
      };
    }

    case REMOVE_POST: {
      return {
        posts: state.posts.filter(post => post.id !== payload.id)
      };
    }

    default:
      return state;
  }
};

export default posts;
