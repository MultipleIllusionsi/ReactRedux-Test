import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchAllPosts, removePost } from "../../redux/actions";

import Pagination from "../../components/Pagination/Pagination";
import PostInfo from "../../components/PostInfo/PostInfo";
import CustomButton from "../../components/CustomButton/CustomButton";

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
        <h1>List of Posts</h1>

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
