import Sequelize from 'sequelize';

import SC7010 from '../app/models/SC7010';

import databaseConfig from '../config/database';

const models = [SC7010];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
