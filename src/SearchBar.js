import React from "react";
import { MdSearch } from "react-icons/md";

export default function SearchBar({ handleSearchNote }){
    return(
        <div className="search">
            <MdSearch className="search-icons" size= '1.3em' />
            <input 
            type="text" 
            placeholder="Enter search text..."
            onChange={(event) => 
                handleSearchNote(event.target.value)
            } />
        </div>
    )

}