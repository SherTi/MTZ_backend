import {Sequelize} from "sequelize";

export default new Sequelize({
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    database: "mtz_tactor",
    username: "api_mtz",
    password: "M*N1u(n*jEZp5!XW",
    logging: false
});