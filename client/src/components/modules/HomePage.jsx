import React, { useState, useEffect } from 'react'
import PORT from 'config/config'
import axios from 'axios'

const HomePage = () => {
  const [roles, setRoles] = useState()
  // const getRolesApi = async () => {
  //   const response = await axios.get(`${PORT}/api/HttpRoles`)
  //   return response
  // }

  useEffect(() => {
    axios.get(`${PORT()}/api/HttpRoles`).then((response) => setRoles(response.data))
  }, [])

  return (
    <>
      <h1>Inicio</h1>
      <h2>Bienvenido/a, buen comienzo de jornada</h2>
      <ul>
        {roles?.length &&
          roles.map((role) => {
            return <li key={role.id_rol}>{role.name}</li>
          })}
      </ul>
    </>
  )
}

export default HomePage
