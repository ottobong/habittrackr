import React from 'react'
import './signup.scss';
import FormInput from '../../component/formInput/FormInput'

const Signup = () => {
  return (
    <div className='signup'>
      
    <form action="">
      <FormInput placeholder='Username'/>
      <FormInput placeholder='Email address'/>
      <FormInput placeholder='Password'/>
      <FormInput placeholder='Confirm password'/>
    </form>

    </div>
  )
}

export default Signup
