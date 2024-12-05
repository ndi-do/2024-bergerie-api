import Score from '#models/score'
import User from '#models/user'

export class LeaderboardService {
  async findByType(type: string) {
    const result = new Map<string, number>()
    const scores = await Score.query().where('type', type).orderBy('value', 'desc')

    for (const score of scores) {
      if (result.has(score.userId)) {
        continue
      }
      result.set(score.userId, score.value)
    }

    const userIds = Array.from(result.keys())
    const users = await User.query().whereIn('id', userIds)

    return users.map((user) => {
      return {
        fullName: user.fullName,
        score: result.get(user.id),
      }
    })
  }
}
