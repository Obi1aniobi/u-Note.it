import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LogInForm(){

    return(
        <>
           <form>
                <div className="container">

                    <div className="loginHeader">
                    <h1>Log in</h1>
                    </div>

                    <div className="emptyFields">
                    <h3>Please fill in the empty fields:</h3>
                    </div>

                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>

                    <div>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <div>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                    </div>

                    <div className="loginForm" >
                        <button>
                            <Link to="../home" relative="path" reloadDocument>Log in</Link>
                        </button>
                        <button type="button" className="cancelbtn">Cancel</button>
                    </div>

                    <div>
                        <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember me
                        </label>
                    </div>



                   
                </div>
                
            </form>     
        </>
    )
}