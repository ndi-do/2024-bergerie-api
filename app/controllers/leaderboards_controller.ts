// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'

export default class LeaderboardsController {
  async index({}: HttpContext) {
    return 'hllo'
  }
}
