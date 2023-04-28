import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import { FacebookTwoTone, Google } from '@mui/icons-material';

const Login = () => {
  return (
    <div className='login'>
      <form>
        <h2>Login</h2>

        <button type='submit'>Signup</button>
        <div className="formLink">
          <span>Already have an account?</span>
          <Link 
          to='/login' 
          className='formSignup'
          style={{textDecoration: 'none'}}>
            {" "}
            Login
            </Link>
        </div>

        <div className="line"></div>
        <div className="media-options">
          <Link to='#' 
          className='facebook' 
          style={{textDecoration: 'none'}}>
            <FacebookTwoTone className='facebookIcon'/>
            <span>Login with Facebook</span>
          </Link>
          <Link to='#' 
          className='google' 
          style={{textDecoration: 'none'}}>
            <Google className='googleIcon'/>
            <span>Continue with Google</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login;
