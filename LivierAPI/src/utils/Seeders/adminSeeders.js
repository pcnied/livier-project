'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();

    await queryInterface.bulkInsert('admin_users', [
      {
        id: uuidv4(),
        name: 'Admin',
        mail: 'admin@example.com',
        username: 'admin',
        password: await bcrypt.hash("admin123", 8),
        created_at: now,
        updated_at: now
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admin_users', null, {});
  }
};
