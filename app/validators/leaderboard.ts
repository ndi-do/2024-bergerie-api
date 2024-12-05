import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const leaderboardParamsValidator = vine.compile(
  vine.object({
    type: vine.string(),
  })
)

export type LeaderboardParamsSchema = Infer<typeof leaderboardParamsValidator>
