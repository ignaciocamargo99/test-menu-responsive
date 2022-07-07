import React from 'react'
import Label from './Label'
import InputPassword from './InputPassword'
import Container from './Container'

const InputPasswordLabel = ({ label, name, placeholder, minLength, maxLength, value, onChange, error }) => {
  return (
    <Container className="form-group row mb-1">
      <Container className="col-md-3">
        <Label htmlFor={name}>{label}</Label>
      </Container>
      <Container className="col-md-9">
        <InputPassword
          id={name}
          name={name}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          error={error}
        />
      </Container>
    </Container>
  )
}

export default InputPasswordLabel
