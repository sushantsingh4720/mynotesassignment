import React from "react";
import "./AddButton.scss";
const AddButton = ({ onClick }) => {
  return (
    <div className="addbutton">
      <button onClick={onClick}>Take a note...</button>
    </div>
  );
};

export default AddButton;
