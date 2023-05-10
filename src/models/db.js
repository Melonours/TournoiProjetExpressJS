import  { Sequelize }  from "sequelize";

//import de la config
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize({
    dialect: 'mssql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

});

//sequelize.sync({force: true});