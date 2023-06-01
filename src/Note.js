import React from 'react';
import { MdDeleteForever } from 'react-icons/md'
import Tinymce from './Tinymce';
import EditNote from './EditNote';

export default function Note({ date, text, id, handleDeleteNote }){

    return(
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever 
                    onClick={()=> handleDeleteNote(id)}
                    className='delete-icon' 
                    size='1.3em' />
            </div>
        </div>
    )
}