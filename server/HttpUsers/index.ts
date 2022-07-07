import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { UserController } from '../src/api/controller'
import { UserRequest } from '../src/api/request'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const userController = new UserController()
  let result: any
  const HEADERS = { 'Content-Type': 'application/json' }
  try {
    const request = new UserRequest()
    result = await userController.createUser(request.toNewUserEntry(req.body))
    result.statusCode = result.statusCode ? result.statusCode : 200
    context.res = {
      body: result,
      headers: HEADERS
    }
  } catch (ex: any) {
    context.res = {
      statusCode: ex.errorCode ? ex.errorCode : 500,
      body: { name_error: ex.name, message: ex.message },
      headers: HEADERS
    }
  }
}
export default httpTrigger
