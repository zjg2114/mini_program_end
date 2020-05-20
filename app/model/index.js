const Sequelize = require('sequelize');

const sequelize = new Sequelize('mini_program', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql' 
});


sequelize.sync({force: false})

module.exports = sequelize