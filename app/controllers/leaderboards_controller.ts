import { LeaderboardService } from '#services/leaderboard_service'
import { leaderboardParamsValidator } from '#validators/leaderboard'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class LeaderboardsController {
  constructor(protected leaderboardService: LeaderboardService) {}
  async index({ request }: HttpContext) {
    const data = await request.validateUsing(leaderboardParamsValidator)

    return this.leaderboardService.findByType(data.type)
  }
}
