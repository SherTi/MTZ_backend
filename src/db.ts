import { Sequelize } from "sequelize";

export default new Sequelize({
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
  database: "mtz_tractor",
  username: "root",
  password: "M*N1u(n*jEZp5!XW",
  logging: false,
});
