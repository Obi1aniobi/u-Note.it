import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

export default function NotesList({ notes, handleAddNote, handleDeleteNote, editNote }){
    return(
        <div className='notes-list'>
            <AddNote handleAddNote={handleAddNote}/>
            {notes.map((note, index) => (
                <Note 
                    key={index}
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}  
                    editNote={editNote}
                 />
            ))} 
            
            
        </div>
    )
}

