import { LoginRepository } from '../../db/repository'
import { LoginParameters } from '../types/login'

export class LoginService {
  #loginRepository: LoginRepository

  constructor() {
    this.#loginRepository = new LoginRepository()
  }

  async createLogin(login: LoginParameters): Promise<string> {
    return await this.#loginRepository.createLogin(login)
  }
}
