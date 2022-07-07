import { assert, expect } from 'chai'
import 'mocha'
const request = require('supertest')('http://localhost:3001')

describe('POST /HttpUsers', () => {
  it('Return status 400 when user_name or password are a number', async () => {
    const newUser = {
      id: null,
      user_name: 23,
      password: 'tdd123',
      creation_date: '2022-06-27',
      deleted_date: null,
      id_profile: 1,
      id_rol: 1
    }
    const response = await request.post('/api/HttpUsers').send(newUser)
    expect(response.status).to.eql(400)
  })
  it('Return status 400 when id_profile or id_rol are a string', async () => {
    const newUser = {
      id: null,
      user_name: 'test',
      password: 'tdd123',
      creation_date: '2022-06-27',
      deleted_date: null,
      id_profile: '1',
      id_rol: '2'
    }
    const response = await request.post('/api/HttpUsers').send(newUser)
    expect(response.status).to.eql(400)
  })
  it('Return expected message when creation_date has an invalid or missing value', async () => {
    const expectedResult = 'Incorrect or missing'
    const newUser = {
      id: null,
      user_name: null,
      password: 'tdd123',
      deleted_date: null,
      id_profile: 1,
      id_rol: 2
    }
    const response = await request.post('/api/HttpUsers').send(newUser)
    expect(response.status).to.eql(400)
    assert.ok(response.body.message.includes(expectedResult))
  })
})
