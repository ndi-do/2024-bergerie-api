/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const ScoresController = async () => await import('#controllers/scores_controller')
const AuthController = async () => await import('#controllers/auth_controller')

router
  .group(() => {
    router.post('/scores', [ScoresController, 'store'])
  })
  .use(middleware.auth())

router.post('/auth/login', [AuthController, 'login'])
