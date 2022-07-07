import { Column, Model, Table } from 'sequelize-typescript'

interface IProfileAttributes {
  id_profile: number
  creation_date: Date
  deleted_date: Date
}

@Table
export class Profiles extends Model<IProfileAttributes> {
  @Column({ primaryKey: true })
  id_profile: number

  @Column
  creation_date: Date

  @Column
  deleted_date: Date
}
