import { Sequelize } from 'sequelize-typescript'
import { Permissions } from '../models/permissions.model'
import { Roles } from '../models/roles.model'
import { Profiles } from '../models/profiles.model'
import { Users } from '../models'

export const connect = (): void => {
  const userName: any = process.env.MYSQL_USER
  const hostName: any = process.env.MYSQL_HOST
  const database: any = process.env.MYSQL_DATABASE
  const password = process.env.MYSQL_PASSWORD
  const dialect: any = process.env.MYSQL_DIALECT

  const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    dialect,
    define: { timestamps: false },
    repositoryMode: true
  })

  /* Add models.  */
  sequelize.addModels([Users])
  sequelize.addModels([Roles])
  sequelize.addModels([Permissions])
  sequelize.addModels([Profiles])

  /* Creating a new object and assigning the Sequelize to it. */
  const db: any = {}
  db.Sequelize = Sequelize
  db.sequelize = sequelize

  return db
}
