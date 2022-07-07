import { sign } from 'jsonwebtoken'
import { LoginParameters } from '../../api/types/login'
import PropertyRequiredError from '../../errors/propertyRequiredError'
import { connect } from '../config/db.config'
import { Users } from '../models'
import bcryptjs = require('bcryptjs')

export class LoginRepository {
  #db: any = {}
  #loginRepository: any

  constructor() {
    this.#db = connect()
    this.#loginRepository = this.#db.sequelize.getRepository(Users)
  }

  async createLogin(login: LoginParameters): Promise<string> {
    let token: string
    try {
      const user = await this.#loginRepository.findOne({ where: { user_name: login.user_name } })

      if (!user) throw new PropertyRequiredError('user_name')
      else {
        if (bcryptjs.compareSync(login.password, user._previousDataValues.password)) {
          token = sign({ user }, process.env.JWT_KEY, {
            expiresIn: 3600
          })
        } else {
          throw new PropertyRequiredError('password')
        }
      }
      return token
    } catch (err) {
      if (err instanceof PropertyRequiredError) {
        throw err
      } else throw new Error(err.message)
    }
  }
}
