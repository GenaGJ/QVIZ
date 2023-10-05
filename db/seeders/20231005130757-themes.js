'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const testThemesData = [
      {
        title: 'Анекдоты от деда',
      },
      {
        title: 'Пранки за 300',
      },
      {
        title: 'Мемы про Германа',
      },
    ]
    const testThemesDataMapped = testThemesData.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    await queryInterface.bulkInsert('Themes', testThemesDataMapped)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes')
  }
};
