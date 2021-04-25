import { Sequelize } from 'sequelize-typescript'
import { Actor } from './Actor';
import { Test } from './Test';

const sequelize = new Sequelize({
  database: 'me_own',
  dialect: 'mysql',
  username: 'root',
  password: 'password',
  host: 'localhost',
  models: [Test, Actor]
})
// sequelize.addModels([Test]);
export default sequelize;