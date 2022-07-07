import { Profiles } from '../../db/models/profiles.model'
import { ProfileService } from '../services'

export class ProfileController {
  #profileService: ProfileService

  constructor() {
    this.#profileService = new ProfileService()
  }

  async getProfiles(): Promise<Profiles> {
    return await this.#profileService.getPermissions()
  }
}
