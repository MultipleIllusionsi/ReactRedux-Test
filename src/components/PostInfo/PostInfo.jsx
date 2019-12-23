import React from "react";
import PropTypes from "prop-types";

import "./PostInfo.scss";

const PostInfo = ({ data }) => (
  <div className="info">
    <h3>{data.title}</h3>
    <p>{data.body}</p>
    <p>#{data.id}</p>
  </div>
);

PostInfo.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostInfo;
