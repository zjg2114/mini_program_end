const Sequelize = require("sequelize");
const { DB_CONFIG } = require("../config");

const { username, password, database, host, dialect } =
  process.env.NODE_ENV === "development"
    ? DB_CONFIG.development
    : DB_CONFIG.production;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

sequelize.sync({ force: false });

module.exports = sequelize;
