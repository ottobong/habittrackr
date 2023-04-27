import React from 'react'
import "./formInput.scss"

const FormInput = (props) => {
  const { onChange, id, ...inputProps } = props;

  return <div className = "formInput">
    <input {...inputProps} onChange={onChange} />
  </div>
}

export default FormInput
