import { Sequelize } from 'sequelize-typescript'
import { Permissions } from '../models/permissions.model'
import { Roles } from '../models/roles.model'
import { Profiles } from '../models/profiles.model'
import { Users } from '../models'

export const connect = (): void => {
  const userName: any = 'CEOTECHUSER'
  const hostName: any = 'immescribanos-dev.mysql.database.azure.com'
  const database: any = 'imm-escribanos-dev'
  const password = 'Immde5cr1b4n05'
  const dialect: any = 'mysql'

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
