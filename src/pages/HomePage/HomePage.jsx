import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts, removePost } from "../../redux/actions";

import Pagination from "../../components/Pagination/Pagination";
import PostInfo from "../../components/PostInfo/PostInfo";
import CustomButton from "../../components/CustomButton/CustomButton";

import { postsPerPage } from "../../assets/constants";

import "./HomePage.scss";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [select, setSelect] = useState("title");

  const dispatch = useDispatch();

  const fetchAllPostsHandler = useCallback(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  const removePostHandler = useCallback(
    id => {
      dispatch(removePost(id));
    },
    [dispatch]
  );

  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    if (!posts.length) {
      fetchAllPostsHandler();
    }
  }, [fetchAllPostsHandler, posts.length]);

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
      <header>
        <CustomButton
          onClick={fetchAllPostsHandler}
          color="black"
          text="Refetch list"
        />
        <h1>List of Posts</h1>
      </header>
      <section className="controls">
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
                      onClick={() => removePostHandler(post.id)}
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

export default HomePage;
