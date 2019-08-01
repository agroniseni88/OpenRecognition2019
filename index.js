// this file will be used to set up deployment
const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true,useCreateIndex: true })
  .then(() => { console.log('Database connection established'); })
  .catch((err) => {
    console.error(`Database error, exiting. Stack trace:\n${err}`);
    process.exit();
  });

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", express.static("client/build"))

const api_server = require("./api-server");
app.use("/api", api_server);