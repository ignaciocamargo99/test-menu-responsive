import React from 'react'
import ErrorLabel from './ErrorLabel'
import Container from './Container'

const SingleSelection = ({ name, placeholder, idProperty, valueProperty, value, options, onChange, error }) => {
  return (
    <Container>
      <select
        name={name}
        value={value}
        className={!error ? 'form-select' : 'form-select is-invalid'}
        onChange={onChange}
      >
        <option value="DEFAULT" hidden>
          {placeholder}
        </option>
        {options.map((option) => {
          return (
            <option key={option[idProperty]} value={option[idProperty]}>
              {option[valueProperty]}
            </option>
          )
        })}
      </select>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </Container>
  )
}

export default SingleSelection
