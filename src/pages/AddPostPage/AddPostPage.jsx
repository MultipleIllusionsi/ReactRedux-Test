import React, { useState, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../redux/actions";

import ChangeForm from "../../components/ChangeForm/ChangeForm";
import CustomButton from "../../components/CustomButton/CustomButton";

import "./AddPostPage.scss";

const AddPostPage = ({ history }) => {
  const [data, setData] = useState({
    title: "",
    body: ""
  });

  const dispatch = useDispatch();

  const addPostHandler = useCallback(
    id => {
      dispatch(addPost(id));
    },
    [dispatch]
  );

  let idForNextPost = useSelector(state => state.posts.initialNumberOfPosts);

  const onSubmit = e => {
    e.preventDefault();
    addPostHandler({ data });
    history.push(`/posts/${++idForNextPost}`);
  };

  return (
    <main className="addpage">
      <div className="heading">
        <CustomButton
          className="go-back"
          to="/posts"
          color="black"
          text="Go back"
        />
        <h1>Add Post</h1>
      </div>

      <ChangeForm
        text="Add"
        onSubmit={onSubmit}
        handlerTitle={e => setData({ ...data, title: e.target.value })}
        handlerBody={e => setData({ ...data, body: e.target.value })}
      />
    </main>
  );
};

export default AddPostPage;
