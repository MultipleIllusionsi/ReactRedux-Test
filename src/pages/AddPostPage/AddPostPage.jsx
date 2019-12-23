import React, { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addPost } from "../../redux/actions";

import ChangeForm from "../../components/ChangeForm/ChangeForm";

import "./AddPostPage.scss";

const AddPostPage = ({ addPost, history }) => {
  const [data, setData] = useState({
    title: "",
    body: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    addPost({ data });
    history.push("/posts");
  };

  console.log("data", data);

  return (
    <main className="addpage">
      <div className="heading">
        <Link className="go-back" to="/posts">
          Go back
        </Link>
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
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(AddPostPage);
