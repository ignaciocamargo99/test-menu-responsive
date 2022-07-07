import { Roles } from '../../db/models/roles.model'
import { RolRepository } from '../../db/repository'

export class RolService {
  #rolRepository: RolRepository

  constructor() {
    this.#rolRepository = new RolRepository()
  }

  async getUsers(): Promise<Roles> {
    return await this.#rolRepository.getRoles()
  }
}
