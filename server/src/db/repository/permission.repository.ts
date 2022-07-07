import { connect } from '../config/db.config'
import { Permissions } from '../models/permissions.model'

export class PermissionRepository {
  #db: any = {}
  #permissionRepository: any

  constructor() {
    this.#db = connect()
    this.#permissionRepository = this.#db.sequelize.getRepository(Permissions)
  }

  async getPermissions(): Promise<Permissions> {
    try {
      const data = await this.#permissionRepository.findAll()
      return data
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
