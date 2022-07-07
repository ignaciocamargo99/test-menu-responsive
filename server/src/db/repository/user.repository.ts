import { connect } from '../config/db.config'
import { UserParameters, Users } from '../models/users.model'
import bcryptjs = require('bcryptjs')
import CreateSuccess from '../../success/CreateSuccess'
export class UserRepository {
  #db: any = {}
  #userRepository: any

  constructor() {
    this.#db = connect()
    // this.db.sequelize.sync({ force: true }).then(() => {
    //   console.log('Drop and re-sync db.')
    // })
    this.#userRepository = this.#db.sequelize.getRepository(Users)
  }

  async getUsers(): Promise<Users> {
    try {
      const users = await this.#userRepository.findAll()
      return users
    } catch (err) {
      return err
    }
  }

  async createUser(user: UserParameters): Promise<CreateSuccess> {
    try {
      user.password = await bcryptjs.hash(user.password, 8)
      await this.#userRepository.create(user)
      return new CreateSuccess('user')
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
