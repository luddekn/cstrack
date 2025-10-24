const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  logging: false,
});

const db = {};
db.sequelize = sequelize;

db.Items = require("./items")(sequelize, Sequelize);

module.exports = db;
