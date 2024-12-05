import { HttpContext } from '@adonisjs/core/http'

export default class LeaderboardsController {
  async index({}: HttpContext) {
    return 'hllo'
  }
}
