import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Category from '../app/models/Category';
class Database {

  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    User.init(this.connection)
    Category.init(this.connection)
  }
}

export default new Database();