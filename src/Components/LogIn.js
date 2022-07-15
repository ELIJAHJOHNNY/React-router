import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LogIn() {
    let navigate = useNavigate();
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    function goto(){
        navigate(`/SignUp`);
    }
    
    function passwordChangeFunction(e) {
        setEnteredPassword(e.target.value)
    }

    function emailChangeFunction(e) {
        setEnteredEmail(e.target.value)
    }

  return (
    <div>
        <h1 id='login-header'>WELCOME</h1>
        <form>
            <div className='input'>
                <input type="email" value={enteredEmail} id='email' placeholder='Email' onChange={emailChangeFunction}/>
            </div>
            <div>
                <input type="password" value={enteredPassword} id='password' placeholder="Password" onChange={passwordChangeFunction}/>
            </div>
            <button id='gotosignup' onClick={goto}><b>Sign Up</b></button>
        </form>    
    </div>
  )
}

export default LogIn