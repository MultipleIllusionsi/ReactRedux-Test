import React, { useEffect, useState, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserData,
  fetchComments,
  removePost,
  editPost
} from "../../redux/actions";

import PostInfo from "../../components/PostInfo/PostInfo";
import CustomButton from "../../components/CustomButton/CustomButton";
import ChangeForm from "../../components/ChangeForm/ChangeForm";

import { customUserId } from "../../assets/constants";

import "./PostPage.scss";

const PostPage = ({ history, match: { params } }) => {
  const dispatch = useDispatch();

  const fetchUserDataHandler = useCallback(
    userId => {
      dispatch(fetchUserData(userId));
    },
    [dispatch]
  );

  const fetchCommentsHandler = useCallback(
    postId => {
      dispatch(fetchComments(postId));
    },
    [dispatch]
  );

  const removePostHandler = useCallback(
    id => {
      dispatch(removePost(id));
    },
    [dispatch]
  );

  const editPostHandler = useCallback(
    id => {
      dispatch(editPost(id));
    },
    [dispatch]
  );

  const posts = useSelector(state => state.posts.posts);
  const users = useSelector(state => state.users.users);
  const comments = useSelector(state => state.comments.comments);

  const post = posts.find(post => post.id === +params.id);
  const user = users.find(user => user.id === post.userId);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    body: "",
    id: +params.id
  });

  useEffect(() => {
    fetchCommentsHandler(params.id);
  }, [fetchCommentsHandler, params.id]);

  useEffect(() => {
    if (post.userId === customUserId && !user) {
      fetchUserDataHandler(customUserId);
      return;
    }

    !user && fetchUserDataHandler(post.userId);
  }, [fetchUserDataHandler, post.userId, user]);

  const onSubmit = e => {
    e.preventDefault();
    editPostHandler({ data });
    setOpen(!open);
  };

  return (
    <main className="postpage">
      <div className="heading">
        <CustomButton
          className="go-back"
          to="/posts"
          color="black"
          text="Go back"
        />

        <h1>Post #{params.id}</h1>
      </div>

      {user && (
        <section className="user-info">
          <h2>Author</h2>
          <h3>Username - {user.username}</h3>
          <h4>Real name - {user.name}</h4>
          <p>
            Email - <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
          <p>
            Phone - <a href={`tel:${user.phone}`}>{user.phone}</a>
          </p>
        </section>
      )}

      <section className="post-info">
        <PostInfo data={post} />

        <div className="buttons">
          <CustomButton
            onClick={() => setOpen(!open)}
            color="blue"
            text="Edit"
          />

          <CustomButton
            onClick={() => {
              removePostHandler(+params.id);
              history.push(`/posts`);
            }}
            color="red"
            text="Delete"
          />
        </div>
      </section>

      {open && (
        <ChangeForm
          text="Save"
          onSubmit={onSubmit}
          handlerTitle={e => setData({ ...data, title: e.target.value })}
          handlerBody={e => setData({ ...data, body: e.target.value })}
        />
      )}

      <section className="comments">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, idx) => (
            <li key={idx}>
              <a href={`mailto:${comment.email}`}>{comment.email}</a>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default PostPage;
