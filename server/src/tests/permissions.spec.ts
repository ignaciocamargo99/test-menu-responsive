import { expect } from 'chai'
import 'mocha'
const request = require('supertest')('http://localhost:3001')

describe('GET /HttpPermissions', () => {
  it('Return at least 1 permission', async () => {
    const response = await request.get('/api/HttpPermissions')
    expect(response.status).to.eql(200)
    if (response.body.length > 0) {
      expect(response.body.length).to.be.at.least(1)
    }
  })
})
