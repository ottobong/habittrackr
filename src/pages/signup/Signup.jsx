import React, { useState } from 'react'
import './signup.scss';
import FormInput from '../../component/formInput/FormInput'

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
      </form>

    </div>
  ) 
}

export default Signup
