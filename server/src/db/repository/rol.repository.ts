import { connect } from '../config/db.config'
import { Roles } from '../models/roles.model'

export class RolRepository {
  #db: any = {}
  #rolRepository: any

  constructor() {
    this.#db = connect()
    this.#rolRepository = this.#db.sequelize.getRepository(Roles)
  }

  async getRoles(): Promise<Roles> {
    try {
      const data = await this.#rolRepository.findAll()
      return data
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
