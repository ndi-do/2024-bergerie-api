import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.firstOrCreate(
      {
        email: 'nathael@bonnal.cloud',
      },
      {
        email: 'nathael@bonnal.cloud',
        fullName: 'Nathael Bonnal',
        password: 'nathael',
      }
    )
  }
}
