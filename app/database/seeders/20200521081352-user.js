'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      // return queryInterface.bulkInsert('Users', [{
      //   username: 'Joe',
      //   email: '15605272372@163.com',
      //   password: '123456',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
