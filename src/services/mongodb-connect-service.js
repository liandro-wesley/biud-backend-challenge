const mongoose = require("mongoose");

class DBConnect {
  constructor(app) {
    this.app = app;
  }

  async connect() {
    try {
      await mongoose.connect(process.env.MONGOOSE_CONECTION_STRING);
      console.log('Success connecting to the database...');
      return this.app.emit('ready')
    } catch (error) {
      console.log(error);
      return;
    }
  }
}

module.exports = DBConnect;
