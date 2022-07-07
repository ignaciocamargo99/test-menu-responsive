import { Column, Model, Table, ForeignKey } from 'sequelize-typescript'
import { Optional } from 'sequelize'
import { Profiles } from '../models/profiles.model'
import { Roles } from '../models/roles.model'

interface IUserAttributes {
  id_user: number
  user_name: string
  password: string
  creation_date: Date
  deleted_date: string
  id_profile: number
  id_rol: number
}

interface IUserCreationAttributes extends Optional<IUserAttributes, 'deleted_date'> {}
@Table
export class Users extends Model<IUserAttributes, IUserCreationAttributes> {
  @Column({ primaryKey: true })
  id_user: number

  @Column
  user_name: string

  @Column
  password: string

  @Column
  creation_date: string

  @Column
  deleted_date: string

  @ForeignKey(() => Profiles)
  @Column
  id_profile: number

  @ForeignKey(() => Roles)
  @Column
  id_rol: number
}

export type UserParameters = Pick<
  Users,
  'id_user' | 'user_name' | 'password' | 'creation_date' | 'deleted_date' | 'id_profile' | 'id_rol'
>
