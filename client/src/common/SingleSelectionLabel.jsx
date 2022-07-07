import React from 'react'
import Label from './Label'
import SingleSelection from './SingleSelection'
import Container from './Container'

const SingleSelectionLabeled = ({
  label,
  name,
  placeholder,
  idProperty,
  valueProperty,
  value,
  options,
  onChange,
  error
}) => {
  return (
    <Container className="form-group row mb-1">
      <Container className="col-md-3">
        <Label htmlFor={name}>{label}</Label>
      </Container>
      <Container className="col-md-9">
        <SingleSelection
          name={name}
          value={value}
          idProperty={idProperty}
          placeholder={placeholder}
          valueProperty={valueProperty}
          options={options}
          onChange={onChange}
          error={error}
        />
      </Container>
    </Container>
  )
}

export default SingleSelectionLabeled
