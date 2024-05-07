import { useEffect, useState } from "react";
import AddButton from "./components/AddButton/AddButton";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import NoteList from "./components/Note/NoteList";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const getNoteList = async () => {
    try {
      const response = await fetch("http://localhost:5000/notes", {
        method: "GET",
      });
      const res = await response.json();
      if (res.success) setNoteList(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getNoteList();
  }, []);

  return (
    <MainWrapper>
      <Navbar />
      <AddButton onClick={() => setOpen(true)} />
      <Modal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        getNoteList={getNoteList}
      />
      <NoteList data={noteList} getNoteList={getNoteList} />
    </MainWrapper>
  );
}

export default App;
