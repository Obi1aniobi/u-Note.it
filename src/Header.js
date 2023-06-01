import React from "react";
import { Button } from "react-bootstrap";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header({ handleToggleDarkMode }){
    return(
        <>
            <div className="header">
                <h1>u-Note.it</h1>

                <div className="navigation">
                        <Link to="../" relative="path" reloadDocument>
                            <Button as="input" type="button" value="Log Out" className="save" />
                        </Link>

                        <Link to="../contactform" relative="path" reloadDocument>
                            <Button as="input" type="button" value="Contact" className="save" />
                        </Link>
                    <div>
                        <MdDarkMode as="input" type="button" value="" className="darkmode" onClick={() => 
                            handleToggleDarkMode(
                                (previousDarkMode)=> !previousDarkMode )}/>
                    </div>
                </div>
            </div>
        </>
    )
}