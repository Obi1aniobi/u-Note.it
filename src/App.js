import React, { useState, useEffect } from "react";
import NotesList from "./NotesList";
import { nanoid } from 'nanoid';
//import Tinymce from "./Tinymce";
import SignUp from "./SignUp";
import LogInForm from "./LogInForm";
import LogOutForm from "./LogOutForm";
import SearchBar from "./SearchBar";
import Header from "./Header";




// //.filter((note) =>
// note.text.toLowerCase().includes(setSearchText) //take the current list of notes, filter the notes, to return only the ones that includes the searchtext (that is what the user has typed into the searchbar), it will then pass the result to the component as a notes prop.
// )

function App (){
 
  const [notes, setNotes] = useState([
   {
    text: 'lorem ipsum dolot',
    id: nanoid(),
    date: "25/05/2023"
 }
]);

  const [ searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );
    
    // check if any notes were retrieved from local storage, if there is a value, setNotes()
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []) // to retrieve any notes on first load
  

  // very important to stringify any data
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', 
    JSON.stringify(notes)
    )}, [notes]);

const addNote = (text) => {
  /*console.log(text)*/
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }

  

  const newNotes = [...notes, newNote]; //This line creates a new array of notes instead of imitating the other array of notes. use of the spread operator to copy the current array of notes
  setNotes(newNotes)
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id); //filter function returns a new array
  setNotes(newNotes);
}

  return(
    <>
    <div className={`${darkMode && 'dark-mode'}`} > {/* template string to determine if we should dynamically add the dark mode class to the div. If darkmode=true, then add darkmode to this string.  */}
    <div className="container">
      {/*<SignUp />*/}
      {/*<LogInForm />*/}
      {/*<LogOutForm />*/}
      <Header handleToggleDarkMode={setDarkMode}/>
      <SearchBar handleSearchNote={searchText}/>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>   
    </div> 
    </div>
    
    </>  
  ) 
}
export default App;