const Sequelize = require('sequelize');

const sequelize = new Sequelize('mini_program', 'root', '12345678', {
  host: 'localhost',
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