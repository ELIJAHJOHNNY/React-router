import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    let navigate = useNavigate()
    function goto(){
        navigate(`/LogIn`);
    }

  return (
    <div>
        <h1>HOMEPAGE</h1>
        <button onClick={goto}>Go to LogIn</button>
    </div>
  )
}

export default HomePage