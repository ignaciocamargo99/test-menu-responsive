import React from 'react'
import Button from './Button'
import Container from './Container'

const Buttons = ({ labelCancel, labelOk, actionCancel, actionOk }) => {
  return (
    <Container className="d-grid gap-2 d-md-flex justify-content-md-end">
      <Button type="button" className="btn btn-secondary" onClick={actionCancel}>
        {labelCancel}
      </Button>
      <Button type="submit" className="btn btn-success" onClick={actionOk}>
        {labelOk}
      </Button>
    </Container>
  )
}
export default Buttons
