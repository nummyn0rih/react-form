import React from 'react'

export default function Input(props) {
  return (
    <div className='form-row'>
      <label htmlFor={props.id}>
        {props.label}
        {props.required && <span className='asterisk'> *</span>}
      </label>
      <div className='wrap'>
        {props.icon}
        <input
          type={props.type ?? 'text'}
          required={props.required}
          id={props.id}
          placeholder={props.placeholder ?? ''}
          name={props.name}
          />
      </div>
    </div>
  )
}
