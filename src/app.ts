import express from 'express';
import bodyParser from 'body-parser';
import DBConnect from './services/mongodb-connect-service';
import cors from 'cors';
import helmet from 'helmet';

// Routes Import
import indexRoute from './routes/index-route';
import userRoute from './routes/user-routes';
import categoryRoute from './routes/category-routes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.security();
    this.database();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(
      bodyParser.json({
        limit: '5mb'
      })
    );
    this.express.use(
      bodyParser.urlencoded({
        extended: false,
        limit: '5mb'
      })
    );
    this.express.use(
      cors({
        origin: '*',
        allowedHeaders: [
          'Origin',
          'X-Requested-With',
          'Content-Type',
          'Accept',
          'x-access-token'
        ],
        methods: 'GET POST PUT DELETE'
      })
    );
  }

  private database(): void {
    const mongodb = new DBConnect(this.express);
    mongodb.connect();
  }

  private security(): void {
    if (process.env.NODE_ENV === 'production') {
      this.express.use(helmet());
    }
  }

  private routes(): void {
    this.express.use('/', indexRoute);
    this.express.use('/user', userRoute);
    this.express.use('/category', categoryRoute);
  }
}

export default new App().express;
