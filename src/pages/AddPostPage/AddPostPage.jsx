import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addPost } from "../../redux/actions";

import ChangeForm from "../../components/ChangeForm/ChangeForm";
import CustomButton from "../../components/CustomButton/CustomButton";

import "./AddPostPage.scss";

const AddPostPage = ({ addPost, id, history }) => {
  const [data, setData] = useState({
    title: "",
    body: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    addPost({ data });
    history.push(`/posts/${++id}`);
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
        handlerTitle={e => setData({ title: e.target.value, body: data.body })}
        handlerBody={e => setData({ body: e.target.value, title: data.title })}
      />
    </main>
  );
};

AddPostPage.propTypes = {
  addPost: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  id: state.posts.arrLength
});

export default connect(mapStateToProps, { addPost })(AddPostPage);
