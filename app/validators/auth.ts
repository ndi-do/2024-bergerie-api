import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)

export const registerValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
    fullName: vine.string(),
  })
)

export type LoginSchema = Infer<typeof loginValidator>
export type RegisterSchema = Infer<typeof registerValidator>
