const express = require('express');
const Router = express.Router();
const main = require('.././controllers/main')

Router.get('/', main.init)
Router.get('/admin', main.admin)
Router.get('/find', main.find)
Router.post('/create', main.create)

module.exports = Router;