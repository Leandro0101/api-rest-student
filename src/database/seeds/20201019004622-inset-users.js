
'use strict'
const bcrypt = require('bcryptjs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'vitor lucas',
        email: 'vitor@gmail.com',
        password_hash: await bcrypt.hash('123345', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'José Wilker',
        email: 'jose@gmail.com',
        password_hash: await bcrypt.hash('123345', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Samuel miguel',
        email: 'samuel@gmail.com',
        password_hash: await bcrypt.hash('132345', 8),
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
