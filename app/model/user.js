const sequelize = require('./index')
const Sequelize = require('sequelize');

const User = sequelize.define(
  "user",
  {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  },
  {}
);

module.exports = User;
