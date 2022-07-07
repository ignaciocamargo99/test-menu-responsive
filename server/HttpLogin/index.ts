import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { LoginController } from '../src/api/controller'
import { LoginRequest } from '../src/api/request'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const loginController = new LoginController()
  let result: any
  const HEADERS = { 'Content-Type': 'application/json' }
  try {
    const request = new LoginRequest()
    result = await loginController.createLogin(request.toNewLogin(req.body))
    context.res = {
      body: { token: result },
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
