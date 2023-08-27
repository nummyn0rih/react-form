import React, { useEffect, useRef, useState } from 'react'
import { MdAlternateEmail, MdPassword } from 'react-icons/md'
import Input from './Input'
import RadioInput from './RadioInput';

const initialValue = {
  name: '',
  nickname: '',
  email: '',
  gender: '',
  password: '',
  repassword: ''
}

const validateRules = {
  password: ({ password }) => {
    if (password.length < 6) {
      return 'Пароль минимум 6 символов'
    }
  },
  repassword: ({ password, repassword }) => {
    if (password !== repassword) {
      return 'Пароли не совпадают'
    }
  }
}

export default function Signup(props) {
  const formRef = useRef(null)
  const [inputs, setInputs] = useState(initialValue)
  const [errors, setErrors] = useState([])
  const [isValid, setIsValid] = useState(true)

  const formValidation = (formValues, validateRules) => {
    setErrors([])

    for (const fieldName in formValues) {
      const validateRule = validateRules[fieldName];
  
      if (validateRule) {
        const error = validateRule(formValues);
  
        if (error) {
          setErrors((prevState) => [...prevState, error])
        }
      }
    }
  }

  useEffect(() => {
    formValidation(inputs, validateRules)
  }, [inputs])
  

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (errors.length === 0) {
      setIsValid(true)
      props.handler(inputs)
      formRef.current.reset()
    } else {
      setIsValid(false)
    }
  }

  const handleReset = () => {
    setInputs(initialValue)
  }

  const iconEmail = <MdAlternateEmail />
  const iconPass = <MdPassword />

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onReset={handleReset}
    >
      <Input type='text' label='Имя' placeholder='Введите имя' id='name' name='name' />
      <Input type='text' label='Никнейм' placeholder='Введите никнейм' id='nickname' name='nickname' required />
      <Input type='email' label='Email' placeholder='Введите Email' id='email2' name='email' required icon={iconEmail} />
      <fieldset>
        <legend>Пол</legend>
        <RadioInput label='Муж' id='man' name='gender' value='man' />
        <RadioInput label='Жен' id='women' name='gender' value='women' />
      </fieldset>
      <Input type='password' label='Пароль' placeholder='Введите пароль' id='password2' name='password' required icon={iconPass} />
      <Input type='password' label='Пароль' placeholder='Повторите пароль' id='repassword' name='repassword' required icon={iconPass} />
      {!isValid && <div className='mt-15'>
        {errors.map((err, i) => <div key={i} className='error'><span className='asterisk'>* </span>{err}</div>)}
      </div>}
      <button type='submit'>Отправить</button>
    </form>
  )
}
