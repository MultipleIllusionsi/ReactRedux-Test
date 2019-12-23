import React from "react";

import "./PostInfo.scss";

const PostInfo = ({ data }) => (
  <div className="info">
    <h3>{data.title}</h3>
    <p>{data.body}</p>
    <p>#{data.id}</p>
  </div>
);
export default PostInfo;
