import dotenv from 'dotenv';
import Debug from './helpers/debug';

Debug.init();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: '.env.local'
  });
}

import app from './app';

const port = process.env.PORT || 3333;

app.set('port', port);

app.on('ready', () => {
  app.listen(port);
  global.log('API started successfully. listening at the port ' + port);
});
