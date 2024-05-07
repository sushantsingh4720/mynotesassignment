import React from "react";
import "./NoteList.scss";
import { data } from "./data";
import NoteCard from "./Note";
const NoteList = () => {
  return (
    <div className="notelist">
      {data.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          date={note.date}
        />
      ))}
    </div>
  );
};

export default NoteList;
