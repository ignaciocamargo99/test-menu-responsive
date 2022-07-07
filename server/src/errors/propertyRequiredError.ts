export default class PropertyRequiredError extends Error {
  errorCode: number

  constructor(message: string) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PropertyRequiredError)
    }

    this.name = 'PropertyRequiredError'
    this.message = 'Incorrect or missing value ' + message
    this.errorCode = 400
  }
}
