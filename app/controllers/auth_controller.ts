import User from '#models/user'
import { AuthService } from '#services/auth_service'
import { loginValidator, registerValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(protected authService: AuthService) {}

  async login({ request }: HttpContext) {
    const data = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(data.email, data.password)
    const token = await User.accessTokens.create(user)

    return token
  }

  async register({ request }: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    return this.authService.createUser(data)
  }
}
