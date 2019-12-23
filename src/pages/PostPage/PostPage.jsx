import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  fetchUserData,
  fetchComments,
  removePost,
  editPost
} from "../../redux/actions";

import PostInfo from "../../components/PostInfo/PostInfo";
import CustomButton from "../../components/CustomButton/CustomButton";
import ChangeForm from "../../components/ChangeForm/ChangeForm";

import "./PostPage.scss";

const PostPage = props => {
  const {
    fetchUserData,
    fetchComments,
    removePost,
    editPost,
    comments,
    posts,
    users,
    match,
    history
  } = props;

  const { id } = match.params;
  const post = posts.find(post => post.id === +id);
  const user = users.find(user => user.id === post.userId);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    body: "",
    id: +id
  });

  useEffect(() => {
    if (!users.find(user => user.id === post.userId)) {
      fetchUserData(post.userId);
    }
    fetchComments(id);
  }, [fetchComments, fetchUserData, id, post.userId, users]);

  const onSubmit = e => {
    e.preventDefault();
    editPost({ data });
    setOpen(!open);
  };

  return (
    <main className="postpage">
      <div className="heading">
        <Link className="go-back" to="/posts">
          Go back
        </Link>

        <h1>Post #{id}</h1>
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
              removePost(+id);
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
          handlerTitle={e =>
            setData({ title: e.target.value, body: data.body, id: +id })
          }
          handlerBody={e =>
            setData({ body: e.target.value, title: data.title, id: +id })
          }
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

const mapStateToProps = state => ({
  posts: state.posts.posts,
  users: state.users,
  comments: state.comments
});

export default connect(mapStateToProps, {
  fetchUserData,
  fetchComments,
  removePost,
  editPost
})(PostPage);
