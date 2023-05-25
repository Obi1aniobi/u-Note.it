import React, { useState } from "react";
import NotesList from "./NotesList";
import { nanoid } from 'nanoid';
import Tinymce from "./Tinymce";
import SignUp from "./SignUp";

function App (){
  const [notes, setNotes] = useState([
    {
    text: <Tinymce />,
    id: nanoid(),
    date: "25/05/2023"
  },
  {
    text: <Tinymce />,
    id: nanoid(),
    date: "26/05/2023"
  }
])

  return(
    <div className="container">
      <SignUp />
      <NotesList notes={notes} />
    </div>  
  )
}
export default App;