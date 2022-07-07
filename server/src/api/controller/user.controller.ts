import { Users } from '../../db/models'
import { UserParameters } from '../../db/models/users.model'
import CreateSuccess from '../../success/CreateSuccess'
import { UserService } from '../services'

export class UserController {
  #userService: UserService

  constructor() {
    this.#userService = new UserService()
  }

  async getUsers(): Promise<Users> {
    return await this.#userService.getUsers()
  }

  async createUser(user: UserParameters): Promise<CreateSuccess> {
    return await this.#userService.createuser(user)
  }

  // async createTask(task) {
  //     this.logger.info('Controller: createTask', task);
  //     return await this.taskService.createTask(task);
  // }

  // async updateTask(task) {
  //     this.logger.info('Controller: updateTask', task);
  //     return await this.taskService.updateTask(task);
  // }

  // async deleteTask(taskId) {
  //     this.logger.info('Controller: deleteTask', taskId);
  //     return await this.taskService.deleteTask(taskId);
  // }
}
