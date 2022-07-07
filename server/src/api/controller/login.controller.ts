import { LoginService } from '../services'
import { LoginParameters } from '../types/login'

export class LoginController {
  #loginService: LoginService

  constructor() {
    this.#loginService = new LoginService()
  }

  async createLogin(login: LoginParameters): Promise<string> {
    return await this.#loginService.createLogin(login)
  }
}
