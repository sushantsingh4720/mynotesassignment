import React from "react";
import { MdDelete } from "react-icons/md";
const Note = ({ id, title, description, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{title}</span>
      <p>{description}</p>
      <div className="note-footer">
        <small>{date}</small>
        <MdDelete
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
