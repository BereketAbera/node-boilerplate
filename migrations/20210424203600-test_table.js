'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Tests', { id: Sequelize.INTEGER, name: Sequelize.STRING, createdAt: Sequelize.DATE, updatedAt: Sequelize.DATE });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Tests');
  }
};
