import { Sequelize } from "sequelize";

const db = new Sequelize('portfolio', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Error: ' + err));

export { db };
