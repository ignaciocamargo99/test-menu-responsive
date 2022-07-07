import { UserParameters } from '../../db/models/users.model'

export type LoginParameters = Pick<UserParameters, 'user_name' | 'password'>
