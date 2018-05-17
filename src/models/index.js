import Sequelize from 'sequelize';
import users from './users';

var db        = {};

const sequelize = new Sequelize('dev', 'dev', 'dev', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

    db['users'] = users;

console.log("object keys", Object.keys(db));

Object.keys(db).forEach(function(modelName) {
	console.log("db and modelname", db, modelName);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
