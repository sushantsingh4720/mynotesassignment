import React from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";
const Modal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].name, e.target[0].value);
    console.log(e.target[1].name, e.target[1].value);
  };
  if (!isOpen) return null;
  return createPortal(
    <div className="modal">
      <div className="modal-container">
        <form className="modal-body" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Take a title..."
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Take a description..."
          />
          <div className="buttoncontainer">
            <button onClick={onClose}>Close</button>
            <button type="submit">Add Note</button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
