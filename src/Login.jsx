import Email from './email.png'
import Password from './password.png'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  

  return (
    <div class="container">
      <div class="header">
          <div class="text">Login</div>
          
      </div>
        <div class="inputs">
            <div class="input">
                <img  src={Email} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div class="input">
                <img  src={Password} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        <div class="forgot">Forgot Password ?</div>
        <div class="buttons">
        <button class="signup">Login</button>
        </div>
        <div class="already">Don't have an account ? <Link to="/signup" class="login">Sign Up</Link></div>
    </div>

  )
}

export default Login