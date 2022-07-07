import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import ErrorLabel from './ErrorLabel'
import Container from './Container'

const InputPassword = ({ name, placeholder, minLength, maxLength, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Container>
      <Container className="input-group">
        <input
          type={showPassword ? 'text' : 'password'}
          className={!error ? 'form-control' : 'form-control is-invalid'}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
        <button type="button" className="btn btn-secondary" onClick={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </Container>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </Container>
  )
}

export default InputPassword
