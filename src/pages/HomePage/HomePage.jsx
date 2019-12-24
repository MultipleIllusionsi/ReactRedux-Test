import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchAllPosts, removePost } from "../../redux/actions";

import Pagination from "../../components/Pagination/Pagination";
import PostInfo from "../../components/PostInfo/PostInfo";
import CustomButton from "../../components/CustomButton/CustomButton";

import { postsPerPage } from "../../assets/constants";

import "./HomePage.scss";

const HomePage = ({ fetchAllPosts, removePost, posts }) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [select, setSelect] = useState("title");

  useEffect(() => {
    if (!posts.length) {
      fetchAllPosts();
    }
  }, [fetchAllPosts, posts]);

  const filteredPosts =
    select === "text"
      ? posts.filter(post =>
          post.body.toLowerCase().includes(filter.toLowerCase())
        )
      : posts.filter(post =>
          post.title.toLowerCase().includes(filter.toLowerCase())
        );

  const handlePagination = ({ target: { value } }) => {
    value && setPage(value);
  };

  const searchInputHandler = e => {
    page !== 1 && setPage(1);
    setFilter(e.target.value);
  };

  const firstPostOnPage = page * postsPerPage - postsPerPage;
  const lastPostOnPage = page * postsPerPage;

  return (
    <main className="homepage">
      <section className="controls">
        <h1>List of Posts</h1>

        <div className="controls__inputs">
          <select value={select} onChange={e => setSelect(e.target.value)}>
            <option value="title">Title</option>
            <option value="text">Text</option>
          </select>

          <input
            onChange={searchInputHandler}
            value={filter}
            type="text"
            placeholder={`Filter by ${select}...`}
          />
          <Link className="add-btn" to="add/post">
            Add Post
          </Link>
        </div>

        <Pagination
          handler={handlePagination}
          page={page}
          length={filteredPosts.length / postsPerPage}
        />
      </section>

      <section className="posts-list">
        {!filteredPosts || !filteredPosts.length ? (
          <div className="not-found">Not found!</div>
        ) : (
          <ul>
            {filteredPosts
              .slice(firstPostOnPage, lastPostOnPage)
              .map((post, idx) => (
                <li className="post-info" key={idx}>
                  <PostInfo data={post} />

                  <div className="buttons">
                    <CustomButton
                      to={`/posts/${post.id}`}
                      color="green"
                      text="Read more..."
                    />

                    <CustomButton
                      onClick={() => removePost(post.id)}
                      color="red"
                      text="Delete"
                    />
                  </div>
                </li>
              ))}
          </ul>
        )}
      </section>
    </main>
  );
};

HomePage.propTypes = {
  fetchAllPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps, { fetchAllPosts, removePost })(
  HomePage
);
