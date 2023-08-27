import React from 'react'

export default function RadioInput(props) {
  return (
    <div className='form-row-radio'>
      <input
        type='radio'
        required={props.required}
        id={props.id}
        name={props.name}
        value={props.value}
      />
      <label htmlFor={props.id}>
        {props.label}
        {props.required && <span className='asterisk'> *</span>}
      </label>
    </div>
  )
}