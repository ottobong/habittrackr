import React, { useState } from 'react'
import './signup.scss';
import FormInput from '../../component/formInput/FormInput'
import { Link } from 'react-router-dom';
import { FacebookRounded, FacebookTwoTone } from '@mui/icons-material';

const Signup = () => {
  const[inputValues, setInputValues]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
});

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password"
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password"
    },
  ];

  const handleChange =(e)=> {
    setInputValues({...inputValues, [e.target.name]: e.target.value})
  }
  console.log(inputValues);

  return (
    <div className='signup'>    
      <form>
        <h2>Create an account</h2>
        {inputs.map((input) => (
          <FormInput key={input.id} 
          {...input} 
          value={inputValues[input.name]} 
          onChange = {handleChange}
          />
        ))}
        <button type='submit'>Signup</button>
        <div className="formLink">
          <span>Already have an account?</span>
          <Link 
          to='/login' 
          className='formSignup'
          style={{ textDecoder: "none"}}>
            {" "}
            Login
            </Link>
        </div>

        <div className="line"></div>
        <div className="media-options">
          <Link to='#' className='facebook'>
            <FacebookTwoTone className='facebookIcon'/>
            <span>Login with Facebook</span>
          </Link>
        </div>
      </form>

    </div>
  ) 
}

export default Signup
