import React from "react";
import PropTypes from "prop-types";

import "./ChangeForm.scss";

const ChangeForm = ({ onSubmit, handlerTitle, handlerBody, text }) => (
  <form className="form-edit" onSubmit={onSubmit}>
    <div>
      <label htmlFor="title">Title</label>
      <input
        autoFocus
        onChange={handlerTitle}
        id="title"
        type="text"
        placeholder="Title..."
        required
      />
    </div>

    <div>
      <label htmlFor="text">Text</label>
      <textarea
        onChange={handlerBody}
        id="text"
        rows="10"
        placeholder="Text..."
        required
      ></textarea>
    </div>

    <button type="submit">{text}</button>
  </form>
);

ChangeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handlerTitle: PropTypes.func.isRequired,
  handlerBody: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default ChangeForm;
