const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = require('../config/config')

class User extends Model{
}
User.init({
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        },
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:"user"
    }
},{
    sequelize,
    modelName:'User'
}
)

module.exports = User