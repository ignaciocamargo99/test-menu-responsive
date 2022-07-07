import { Permissions } from '../../db/models/permissions.model'
import { PermissionService } from '../services'

export class PermissionController {
  #permissionService: PermissionService

  constructor() {
    this.#permissionService = new PermissionService()
  }

  async getPermissions(): Promise<Permissions> {
    return await this.#permissionService.getPermissions()
  }
}
