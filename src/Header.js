import React from "react";
import { Button } from "react-bootstrap";
import { MdDarkMode } from "react-icons/md";

export default function Header({ handleToggleDarkMode }){
    return(
        <div className="header">
            <h1>u-Note.it</h1>

            <div className="navigation">
                <div className="menuButton">
                    <Button as="input" type="button" value="Menu" className="save" />
                </div>
                
                <div>
                    <MdDarkMode as="input" type="button" value="" className="darkmode" onClick={() => 
                        handleToggleDarkMode(
                            (previousDarkMode)=> !previousDarkMode )}/>
                </div>
            </div>
        </div>


    )
}