import React from "react";
import "./NoteList.scss";
import NoteCard from "./Note";
const NoteList = ({ data, getNoteList }) => {
  const handleDeleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/note/${id}`, {
        method: "DELETE",
      });
      const res = await response.json();
      if (res.success) getNoteList();
    } catch (error) {}
  };
  return (
    <div className="notelist">
      {data.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
