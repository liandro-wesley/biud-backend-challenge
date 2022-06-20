import { connect as _connect } from 'mongoose';
import { Application } from 'express';
import Debug from '../helpers/debug';

const { log, error } = new Debug();

class DBConnect {
  app: Application;
  constructor(app) {
    this.app = app;
  }

  async connect() {
    try {
      await _connect(process.env.MONGOOSE_CONECTION_STRING);
      log('Success connecting to the database...');
      return this.app.emit('ready');
    } catch (err) {
      error(err);
      return;
    }
  }
}

export default DBConnect;
