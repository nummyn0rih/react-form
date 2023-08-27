import React, { useRef, useState } from 'react'
import { MdAlternateEmail, MdPassword } from 'react-icons/md'

import Input from './Input'

export default function Signin(props) {
  const formRef = useRef(null)
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handler(inputs)
    formRef.current.reset()
  }

  const handleReset = () => {
    setInputs({
      email: '',
      password: ''
    })
  }

  const iconEmail = <MdAlternateEmail />
  const iconPass = <MdPassword />

  return (
    <form
      ref={formRef}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Input type='email' label='Email' placeholder='Введите Email' id='email' name='email' required icon={iconEmail} />
      <Input type='password' label='Password' placeholder='Введите пароль' id='password' name='password' required icon={iconPass} />
      <button type='submit'>Войти</button>
    </form>
  )
}
