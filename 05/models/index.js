import { Sequelize } from 'sequelize';
import guestModel from './guest.model.js';
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;


// initialisation de Sequelize
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    dialect: "sqlite",
    storage: "./db/data.sqlite"
});


const db = {};
db.sequelize = sequelize;
db.Guest = guestModel(sequelize);

export default db;