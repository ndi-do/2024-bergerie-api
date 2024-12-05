import User from '#models/user'
import { loginValidator } from '#validators/auth'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ request }: HttpContext) {
    const data = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(data.email, data.password)
    const token = await User.accessTokens.create(user)

    return token
  }
}
