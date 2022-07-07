import React from 'react'
import Label from './Label'
import SingleInputText from './SingleInputText'
import Container from './Container'

const SingleInputTextLabel = ({ label, name, placeholder, minLength, maxLength, value, onChange, error }) => {
  return (
    <Container className="form-group row mb-1">
      <Container className="col-md-3">
        <Label htmlFor={name}>{label}</Label>
      </Container>
      <Container className="col-md-9">
        <SingleInputText
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

export default SingleInputTextLabel
