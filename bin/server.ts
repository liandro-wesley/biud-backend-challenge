require('dotenv').config({
  path: process.env.NODE_ENV === "development" ? ".env.local" : ".env"
});

const app = require('../src/app');
const http = require('http');

const port =  process.env.PORT;

app.set('port', port);

const server = http.createServer(app);

app.on('ready', () => {
  server.listen(port);
  console.log('API started successfully. listening at the port ' + port)
})


