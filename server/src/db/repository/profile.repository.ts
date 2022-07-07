import { connect } from '../config/db.config'
import { Profiles } from '../models/profiles.model'

export class ProfileRepository {
  #db: any = {}
  #profileRepository: any

  constructor() {
    this.#db = connect()
    this.#profileRepository = this.#db.sequelize.getRepository(Profiles)
  }

  async getProfiles(): Promise<Profiles> {
    try {
      const data = await this.#profileRepository.findAll()
      return data
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
