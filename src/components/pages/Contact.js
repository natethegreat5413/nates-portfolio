import React from 'react'
import '../../App.css'
import axios from 'axios'
import '../pages/Contact.css'

    function Contact(){
        return(
            <h1>Let's Talk!</h1>
        )
    }
    
 {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
 {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                
    
    export default Contact;