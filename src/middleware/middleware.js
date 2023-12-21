const express = require('express');
const cors = require('cors');

const connectMiddleware = (app) => {
    app.use(cors());
    app.use(express.json());
}

module.exports = connectMiddleware