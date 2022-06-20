const express = require("express");
const bodyParser = require("body-parser");
const DBConnect = require('./services/mongodb-connect-service');

const app = express();
const router = express.Router();

// MongoDB Connect
const mongodb = new DBConnect(app);
mongodb.connect();

app.use(
  bodyParser.json({
    limit: "5mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "5mb",
  })
);


// CORS Startup
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Routes Startup
const indexRoute = require('./routes/index-route');

app.use('/', indexRoute);

module.exports = app;
