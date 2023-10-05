'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const testQuestionsData = [
      {
        title: 'кек?',
        theme_id: 1,
        answer: 'кек',
      },
      {
        title: 'как?',
        theme_id: 1,
        answer: 'как',
      },
      {
        title: 'кок?',
        theme_id: 1,
        answer: 'кок',
      },
      {
        title: 'Здарова?',
        theme_id: 2,
        answer: 'Здарова',
      },
      {
        title: 'Прощай?',
        theme_id: 2,
        answer: 'Прощай',
      },
      {
        title: 'Грустно?',
        theme_id: 2,
        answer: 'Вкусно',
      },
      {
        title: 'Бим?',
        theme_id: 3,
        answer: 'Бим',
      },
      {
        title: 'Бам?',
        theme_id: 3,
        answer: 'Бам',
      },
      {
        title: 'Бум?',
        theme_id: 3,
        answer: 'Бум',
      },
    ]
    const testQuestionsDataMapped = testQuestionsData.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
    await queryInterface.bulkInsert('Questions', testQuestionsDataMapped)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions')
  }
};
