import { Column, Model, Table } from 'sequelize-typescript'

interface IPermissionAttributes {
  id_permission: number
  name: string
  description: string
}

@Table
export class Permissions extends Model<IPermissionAttributes> {
  @Column({ primaryKey: true })
  id_permission: number

  @Column
  name: string

  @Column
  description: string
}
