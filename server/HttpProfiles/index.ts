import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { ProfileController } from '../src/api/controller'

const httpTrigger: AzureFunction = async function (context: Context, _req: HttpRequest): Promise<void> {
  const profileController = new ProfileController()
  let result: any
  const HEADERS = { 'Content-Type': 'application/json' }
  try {
    result = await profileController.getProfiles()
    result.statusCode = result.statusCode ? result.statusCode : 200
    context.res = {
      body: result.length > 0 ? result : { message: 'Tabla vacía' },
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
