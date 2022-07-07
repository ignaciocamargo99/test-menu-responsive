import { LoginParameters } from '../types/login'
import { BaseRequest } from './base.request'
import Joi = require('joi')
import PropertyRequiredError from '../../errors/propertyRequiredError'

// #region validators

const parametersFromRequest = Joi.object({
  user_name: Joi.string().max(18).required(),
  password: Joi.string().max(32).min(8).alphanum().required()
})

// #endregion

export class LoginRequest extends BaseRequest {
  toNewLogin = (object: any): LoginParameters => {
    const { error } = parametersFromRequest.validate(object)
    if (error) throw new PropertyRequiredError(error.message)

    const newLogin: LoginParameters = {
      user_name: object.user_name,
      password: object.password
    }
    return newLogin
  }
}
