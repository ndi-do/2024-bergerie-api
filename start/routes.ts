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
const LeaderboardController = async () => await import('#controllers/leaderboards_controller')

router
  .group(() => {
    router.post('/scores', [ScoresController, 'store'])
  })
  .use(middleware.auth())

router.get('/leaderboard', [LeaderboardController, 'index'])
router.post('/auth/login', [AuthController, 'login'])
router.post('/auth/register', [AuthController, 'register'])
