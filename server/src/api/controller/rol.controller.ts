import { Roles } from '../../db/models/roles.model'
import { RolService } from '../services'

export class RolController {
  #rolService: RolService

  constructor() {
    this.#rolService = new RolService()
  }

  async getRoles(): Promise<Roles> {
    return await this.#rolService.getUsers()
  }
}
