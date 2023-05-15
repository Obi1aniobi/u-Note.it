import React from 'react';
import { MdDeleteForever } from 'react-icons/md'

export default function Note(){
    return(
        <div className='note'>
            <span>Hello this is our first note</span>
            <div className='note-footer'>
                <small>15/05/2023</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>
        </div>
    )
}