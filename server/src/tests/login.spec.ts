import { expect } from 'chai'
import 'mocha'
const request = require('supertest')('http://localhost:3001')

describe('POST /HttpLogin', () => {
  it("Return status 400 when user_name or password didn't match with any register in the db", async () => {
    const newLogin = {
      user_name: 'test',
      password: 'incorrect'
    }
    const response = await request.post('/api/HttpLogin').send(newLogin)
    expect(response.status).to.eql(400)
  })
  it('Return status 400 when user_name or password are an incorrect value', async () => {
    const newUser = {
      user_name: 'test',
      password: 3
    }
    const response = await request.post('/api/HttpUsers').send(newUser)
    expect(response.status).to.eql(400)
  })
})
