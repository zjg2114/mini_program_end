const Sequelize = require('sequelize');

const sequelize = new Sequelize('mini_program', 'mini_program', 'zjg123456', {
  host: '47.103.197.254',
  dialect: 'mysql' 
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//       console.error('Unable to connect to the database:', err);
//     });