import { BaseRequest } from './base.request'
import { parseFormatDate } from '../../utils/parseFormatDate.utils'
import { UserParameters } from '../../db/models/users.model'
import PropertyRequiredError from '../../errors/propertyRequiredError'
import Joi = require('joi')

// #region validators

const parametersFromRequest = Joi.object({
  user_name: Joi.string().max(18).required(),
  password: Joi.string().max(32).min(8).alphanum().required(),
  id_profile: Joi.number().integer().required(),
  id_rol: Joi.number().integer().required()
})

// #endregion

export class UserRequest extends BaseRequest {
  toNewUserEntry = (object: any): UserParameters => {
    const { error } = parametersFromRequest.validate(object)
    if (error) throw new PropertyRequiredError(error.message)

    const newUser: UserParameters = {
      id_user: null,
      user_name: object.user_name,
      password: object.password,
      creation_date: parseFormatDate(new Date()),
      deleted_date: null,
      id_profile: object.id_profile,
      id_rol: object.id_rol
    }
    return newUser
  }
}
