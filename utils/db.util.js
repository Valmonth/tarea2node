
const {Sequelize, DataTypes} = require('sequelize');
 
const db = new Sequelize({
  dialect: "postgres",
  host: "localHost",
  port: 5432,
  username: "postgres",
  password: "12qwaszx",
  database: "taks",
  logging: false
});

module.exports = {
    db,
    DataTypes
}