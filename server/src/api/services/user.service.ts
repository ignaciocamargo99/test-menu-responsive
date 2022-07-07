import { Users } from '../../db/models'
import { UserParameters } from '../../db/models/users.model'
import { UserRepository } from '../../db/repository'
// import CreateSuccess from '../../success/CreateSuccess'

export class UserService {
  #userRepository: UserRepository

  constructor() {
    this.#userRepository = new UserRepository()
  }

  async getUsers(): Promise<Users> {
    return await this.#userRepository.getUsers()
  }

  async createuser(user: UserParameters): Promise<any> {
    return await this.#userRepository.createUser(user)
  }

  // async createTask(task) {
  //     return await this.userRepository.createUser(task);
  // }

  // async updateTask(task) {
  //     return await this.userRepository.updateUser(task);
  // }

  // async deleteTask(taskId) {
  //     return await this.userRepository.delete(taskId);
  // }
}
