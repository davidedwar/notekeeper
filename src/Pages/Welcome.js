import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Signup from './Signup'

export default function Welcome() {
    return (
        <div id = 'welcomeDiv'>
             <Router >
                 <div id = 'welcomeText'>
           <nav><p >Welcome to Notekeeper, Please <a href = "/Signin">Sign in</a> to continue</p></nav>
                <nav> <p>are you new here?<a href = "/Signup">Signup</a></p></nav>
                </div>
            </Router>
        </div>
    )
}
