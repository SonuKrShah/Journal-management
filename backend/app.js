// This file contains all the code for all the endpoints and the middleware implementations.
const express = require('express');
const app = express();

app.use(express.json());

module.exports = app;