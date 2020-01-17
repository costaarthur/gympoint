import Sequelize from 'sequelize';

import User from '../app/models/User';
import AdmUser from '../app/models/AdmUser';
import Student from '../app/models/Student';

import databaseConfig from '../config/database';

const models = [User, AdmUser, Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
