var express = require('express');
var UserController = require('../controller/UserController');
var api = express.Router();

//Rutas de usuario
api.get('/getUser',UserController.getUsers);
api.post('/create',UserController.save);
api.put('/update',UserController.updateUser);
api.put('/delete',UserController.destroy);

module.exports = api;