var sequelize = require('sequelize');
var db = require('../config/database');

var user = db.define('User',{
    idUser:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: sequelize.STRING
    },
    nick:{
        type: sequelize.STRING
    },
    email:{
        type: sequelize.STRING
    },
    password:{
        type: sequelize.STRING
    },
    role:{
        type: sequelize.STRING
    },
    image:{
        type: sequelize.STRING
    },

},
    {freezeTableName: true,timestamps: false,});
module.exports =  user;