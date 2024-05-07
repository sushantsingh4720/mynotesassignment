import { useState } from "react";
import AddButton from "./components/AddButton/AddButton";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import NoteList from "./components/Note/NoteList";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <MainWrapper>
      <Navbar />
      <AddButton onClick={() => setOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} />
      <NoteList />
    </MainWrapper>
  );
}

export default App;
