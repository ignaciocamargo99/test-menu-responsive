import { Profiles } from '../../db/models/profiles.model'
import { ProfileRepository } from '../../db/repository'

export class ProfileService {
  #profileRepository: ProfileRepository

  constructor() {
    this.#profileRepository = new ProfileRepository()
  }

  async getPermissions(): Promise<Profiles> {
    return await this.#profileRepository.getProfiles()
  }
}
