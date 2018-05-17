import Sequelize from 'sequelize';

const sequelize = new Sequelize('dev', 'dev', 'dev', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
});