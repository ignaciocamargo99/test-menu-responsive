export default class CreateSuccess {
  statusCode: number
  name: string
  message: string

  constructor(message: string) {
    this.name = 'CreateSuccess'
    this.message = message + ' created successfully'
    this.statusCode = 200
  }
}
