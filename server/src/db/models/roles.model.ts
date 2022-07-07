import { Column, Model, Table } from 'sequelize-typescript'

interface IRolAttributes {
  id_rol: number
  name: string
  description: string
}

@Table
export class Roles extends Model<IRolAttributes> {
  @Column({ primaryKey: true })
  id_rol: number

  @Column
  name: string

  @Column
  description: string
}
