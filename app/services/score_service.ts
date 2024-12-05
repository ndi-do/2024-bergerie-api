import { CreateScoreSchema } from '#validators/score'
import Score from '#models/score'

export class ScoreService {
  async create(payload: CreateScoreSchema, userId: string) {
    return Score.create({
      ...payload,
      userId,
    })
  }
}
