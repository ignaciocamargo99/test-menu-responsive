import React, { useState } from 'react'
import SingleInputTextLabel from 'common/SingleInputTextLabel'
import InputPasswordLabel from 'common/InputPasswordLabel'
import SingleSelectionLabel from 'common/SingleSelectionLabel'
import Buttons from 'common/Buttons'
import H3 from 'common/H3'
import validateFormUser from '../validations/validateFormUser'

const FormUser = () => {
  const [userFormValues, setUserFormValues] = useState({
    userInput: '',
    userPassword: '',
    repeatUserPassword: '',
    userRole: '',
    errors: {}
  })

  const handleChangeForm = ({ target }) => {
    const { name, value } = target
    setUserFormValues({ ...userFormValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { errors, ...valuesUser } = userFormValues
    const resultValidation = validateFormUser(valuesUser)
    setUserFormValues({ ...valuesUser, errors: resultValidation })
    if (!Object.keys(resultValidation).length) {
      e.target.reset()
      setUserFormValues({ userInput: '', userPassword: '', repeatUserPassword: '', userRole: '', errors: {} })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Usuarios</h1>
      <hr />
      <H3>Registrar usuario</H3>
      <SingleInputTextLabel
        label="Nombre"
        name="userInput"
        placeholder="Ingrese el nombre de usuario"
        minLength="1"
        maxLength="50"
        value={userFormValues.userInput}
        onChange={handleChangeForm}
        error={userFormValues.errors.userInput}
      />
      <InputPasswordLabel
        label="Contraseña"
        name="userPassword"
        placeholder="Ingrese su contraseña"
        minLength="8"
        maxLength="50"
        value={userFormValues.userPassword}
        onChange={handleChangeForm}
        error={userFormValues.errors.userPassword}
      />
      <InputPasswordLabel
        label="Repetir contraseña"
        name="repeatUserPassword"
        placeholder="Repita su contraseña ingresada"
        minLength="8"
        maxLength="50"
        value={userFormValues.repeatUserPassword}
        onChange={handleChangeForm}
        error={userFormValues.errors.repeatUserPassword}
      />
      <SingleSelectionLabel
        label="Rol"
        name="userRole"
        placeholder="Seleccione un rol"
        idProperty="id"
        valueProperty="name"
        options={[
          { id: 1, name: 'SuperAdmin' },
          { id: 2, name: 'Admin' }
        ]}
        onChange={handleChangeForm}
        error={userFormValues.errors.userRole}
        value={userFormValues.userRole}
      />
      <Buttons labelCancel="Cancelar" labelOk="Guardar" />
    </form>
  )
}

export default FormUser
