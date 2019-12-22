import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchAllPosts, removePost } from "../../redux/actions";

import Pagination from "../../components/Pagination/Pagination";

import "./HomePage.scss";

const HomePage = ({ fetchAllPosts, removePost, posts }) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (!posts.length) {
      fetchAllPosts();
      console.log("posts was fetched");
    }
  }, [fetchAllPosts, posts]);

  const postsPerPage = 10;

  const filteredPosts = posts.filter(post =>
    post.body.toLowerCase().includes(filter.toLowerCase())
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
        <h1>Home Page</h1>

        <div className="controls__inputs">
          <input
            onChange={searchInputHandler}
            value={filter}
            type="text"
            placeholder="Filter by text..."
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
                <li key={idx}>
                  <div className="info">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <p>#{post.id}</p>
                  </div>

                  <div className="buttons">
                    <button className="buttons__read">
                      <Link to={`/posts/${post.id}`}>Read more...</Link>
                    </button>
                    <button
                      onClick={() => removePost(post.id)}
                      className="buttons__delete"
                    >
                      Delete
                    </button>
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
  posts: state.posts.posts,
  state: state
});

export default connect(mapStateToProps, { fetchAllPosts, removePost })(
  HomePage
);
