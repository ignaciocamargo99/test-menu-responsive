import React from 'react'
import ErrorLabel from './ErrorLabel'
import Container from './Container'

const SingleInputText = ({ name, placeholder, minLength = '1', maxLength = '999', value, onChange, error }) => {
  return (
    <Container>
      <input
        type="text"
        className={!error ? 'form-control' : 'form-control is-invalid'}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </Container>
  )
}

export default SingleInputText
