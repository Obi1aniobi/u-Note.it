import React from "react";

export default function ContactForm(){
    return(
        <div class="formContainer">
            <form>
                <div className="contactHeader">
                <h1>Contact</h1>
                </div>

                <div className="contact">
                <p>Email</p>
                <input type="email" name="email" placeholder="example@email.com" className="email"/>
                </div>

                <div className="typeArea">
                <p>Subject</p>
                <textarea 
                id="subject" 
                name="subject" 
                placeholder="Type your message here..." 
                style={{width: "450px",
                        height: "400px"}}>
                </textarea>
                </div>

                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}