'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const testUsersData = [
      {
        name: 'Ivan',
        score: 0,
      },
      {
        name: 'Grisha',
        score: 0,
      },
      {
        name: 'Tamara',
        score: 0,
      },
      {
        name: 'Stepa',
        score: 0,
      },
    ]
    const testUsersDataMapped = testUsersData.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    await queryInterface.bulkInsert('Users', testUsersDataMapped)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users')
  }
};
