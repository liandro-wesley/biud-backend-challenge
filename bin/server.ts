import dotenv from 'dotenv';
import Debug from '../src/helpers/debug';

const { log } = new Debug();

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.local' : '.env'
});

import app from '../src/app';

const port = process.env.PORT;

app.set('port', port);

app.on('ready', () => {
  app.listen(port);
  log('API started successfully. listening at the port ' + port);
});
