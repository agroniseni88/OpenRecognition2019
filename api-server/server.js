const express = require('express');
const router = express.Router();

const profile = require("./profile");
router.use("/profile", profile);

const connection = require("./connection");
router.use("/connection", connection);

const following = require("./following");
router.use("/following", following);

module.exports = router;

// search you have to change in following folder just search in post in controller router