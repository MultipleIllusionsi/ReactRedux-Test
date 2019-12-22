import React from "react";

import "./Pagination.scss";

const Pagination = ({ length, page, handler }) => {
  const numberOfPage = Math.ceil(length);
  const arr = [];
  for (let i = 1; i <= numberOfPage; i++) {
    arr[i - 1] = i;
  }

  return (
    <ul onClick={handler} className="pagination">
      {arr.map((elem, idx) => (
        <li
          key={idx}
          value={elem}
          className={`pagination__item ${page === elem && "selected"}`}
        >
          {elem}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
