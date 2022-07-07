import { Permissions } from '../../db/models/permissions.model'
import { PermissionRepository } from '../../db/repository'

export class PermissionService {
  #permissionRepository: PermissionRepository

  constructor() {
    this.#permissionRepository = new PermissionRepository()
  }

  async getPermissions(): Promise<Permissions> {
    return await this.#permissionRepository.getPermissions()
  }
}
