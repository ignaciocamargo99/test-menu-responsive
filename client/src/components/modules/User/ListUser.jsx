import React from 'react'
import Container from '../../../common/Container'
import DataTable from '../../../common/DataTable'

const ListUser = () => {
  return (
    <Container>
      <DataTable
        columns={[
          { name: 'Identificador', width: '10%' },
          { name: 'Usuario', width: '30%' },
          { name: 'Nombre de usuario', width: '30%' },
          { name: 'Apellido del usuario', width: '30%' }
        ]}
        rows={[
          { id: 1, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 2, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' },
          { id: 3, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 4, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' },
          { id: 5, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 6, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' },
          { id: 7, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 8, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' },
          { id: 9, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 10, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' },
          { id: 11, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 12, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' },
          { id: 13, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 14, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' },
          { id: 15, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 16, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' },
          { id: 17, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 18, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' },
          { id: 19, usuario: 'Matias', nombre: 'matias', apellido: 'giorda' },
          { id: 20, usuario: 'Jose', nombre: 'matias', apellido: 'giorda' }
        ]}
      />
    </Container>
  )
}

export default ListUser
