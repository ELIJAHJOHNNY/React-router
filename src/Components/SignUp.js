import React from 'react'
import { useNavigate } from "react-router-dom";

function SignUp() {
    let navigate = useNavigate();
    function goto(){
        navigate(`/`);
    }
  return (
    <div>
        <h1>SignUp</h1>
        <button onClick={goto}>Go to HomePage</button>
    </div>
    
  )
}

export default SignUp