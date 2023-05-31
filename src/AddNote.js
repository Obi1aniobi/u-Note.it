import React from "react";
import { useState } from "react";
import Tinymce from "./Tinymce";
import Button from 'react-bootstrap/Button';
import Note from "./Note";



// export default function AddNote({ handleAddNote }){
//     const [noteText, setNoteText] = useState('');
//     const characterLimit = 500;

//     const handleChange = (event) => {
//         //console.log(event.target.value)
//         if(characterLimit-event.target.value.length >= 0){
//             setNoteText(event.target.value);
//         };   
//     };

//     const handleSaveClick = () => {
//         if(noteText.trim().length > 0){
//             handleAddNote(noteText);
//             setNoteText('');
//         }
//     }

//     return(
//         <div className="note new">
//             <textarea 
//                 rows='8'
//                 cols='10'
//                 placeHolder='click to add note...'
//                 value={noteText}
//                 onChange={handleChange}
//                 wrap="soft"
//                 >
//             </textarea>

//             <div className="note-footer">
//                 <small>{characterLimit - noteText.length} Remaining</small>
//                 <Button as="input" type="button" value="Save" className="save" onClick={handleSaveClick}/>
//             </div>

//         </div>
//     )
// }

export default function AddNote({text, handleAddNote}){
    
     const [ noteText, setNoteText] = useState('') /* to know what the user has typed*/
     const [ textWithoutHTML, setText ] = useState('');

    const handleChange = (text) => {
        setNoteText(text)
        
    };

     const handleSaveClick = () => {
        console.log(`outside if handlesaveclick`)
        console.log({noteText})
       if(noteText.trim().length > 0){
        console.log(`in if handle save click`)
            handleAddNote(textWithoutHTML);
             setNoteText('')
        }
        
    }/*the state gets updated with the new note */

     return(
        <div className="note new">
            <Tinymce handleChange={handleChange} setText={setText} />
            <div>
                <Button as="input" type="button" value="Save" className="save" onClick={handleSaveClick}/>   
            </div>
         </div>
     )
 }