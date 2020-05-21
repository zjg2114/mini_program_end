const SECRET = "mini_program";
const DB_CONFIG = {
  development: {
    username: "root",
    password: "12345678",
    database: "mini_program",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: "joe",
    password: "zjg123456",
    database: "mini_program",
    host: "47.103.197.254",
    dialect: "mysql",
  },
};

module.exports = { SECRET, DB_CONFIG };
