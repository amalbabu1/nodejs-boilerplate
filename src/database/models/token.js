const {DataTypes, Model }  = require('sequelize')
const sequelize = require('../config/config')
const User = require('../models/user')

class Token extends Model{

}
Token.init({
    token:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    expires:{
        type:DataTypes.DATE,
        allowNull:false
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    blacklisted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    }
},{
    sequelize,
    modelName:'Token'
})

User.hasOne(Token,{
    onDelete:'CASCADE',
    foreignKey:'id'
})

module.exports = Token