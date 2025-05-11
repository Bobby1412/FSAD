import React from 'react'
import './Signup.css'
import Email from './email.png'
import Password from './password.png'
import person from './person.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div class="container">
      <div class="header">
          <div class="text">Sign Up</div>
          
      </div>
        <div class="inputs">
            <div class="input">
                <img  src={person} alt="" />
                <input type="text" placeholder='Name' />
            </div>
            <div class="input">
                <img  src={Email} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div class="input">
                <img  src={Password} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        <div class="buttons">
        <button class="signup">Sign Up</button>
        </div>
        <div class="already">Already have an account ? <Link to="/login" class="login">Login</Link></div>
    </div>
  )
}

export default Signup