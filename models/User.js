const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt =require("bcrypt");

class User extends Model {}

User.init({
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    }
},{
    sequelize,
    hooks:{
        beforeCreate:async (newUser)=>{
            newUser.password = await bcrypt.hash(newUser.password,10);
        }
    }
})

module.exports = User