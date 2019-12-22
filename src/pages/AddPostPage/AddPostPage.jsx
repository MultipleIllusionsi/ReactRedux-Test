import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addPost } from "../../redux/actions";

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

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            autoFocus
            onChange={e => setData({ title: e.target.value, body: data.body })}
            id="title"
            type="text"
            placeholder="Title..."
            required
          />
        </div>

        <div>
          <label htmlFor="text">Text</label>
          <textarea
            onChange={e => setData({ body: e.target.value, title: data.title })}
            id="text"
            rows="10"
            placeholder="Text..."
            required
          ></textarea>
        </div>

        <button type="submit">Add</button>
      </form>
    </main>
  );
};

AddPostPage.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(AddPostPage);
