import React from 'react';
import { MdDeleteForever } from 'react-icons/md'
import Tinymce from './Tinymce';


export default function Note( {date, text, id}){
    return(
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>
        </div>
    )
}