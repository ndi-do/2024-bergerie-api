// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { createScoreValidator } from '#validators/score'
import { inject } from '@adonisjs/core'
import { ScoreService } from '#services/score_service'

@inject()
export default class ScoresController {
  constructor(protected scoreService: ScoreService) {}

  async store({ request, auth }: HttpContext) {
    const data = await request.validateUsing(createScoreValidator)

    return this.scoreService.create(data, auth.user!.id)
  }
}
