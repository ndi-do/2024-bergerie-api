import User from '#models/user'
import { RegisterSchema } from '#validators/auth'

export class AuthService {
  async createUser(payload: RegisterSchema) {
    return User.create(payload)
  }
}
