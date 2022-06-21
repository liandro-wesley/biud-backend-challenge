import { connect as _connect } from 'mongoose';
import { Application } from 'express';

class DBConnect {
  app: Application;
  constructor(app) {
    this.app = app;
  }

  async connect() {
    try {
      await _connect(process.env.MONGOOSE_CONECTION_STRING);
      global.log('Success connecting to the database...');
      return this.app.emit('ready');
    } catch (err) {
      global.error(err);
      return;
    }
  }
}

export default DBConnect;
