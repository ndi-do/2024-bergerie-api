import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const createScoreValidator = vine.compile(
  vine.object({
    value: vine.number(),
    type: vine.string(),
  })
)

export type CreateScoreSchema = Infer<typeof createScoreValidator>
