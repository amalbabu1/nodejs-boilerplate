const Sequelize = require('sequelize')
const config = require('../../config/config')

const sequelize = new Sequelize(
   config.db.database,
   config.db.username,
   config.db.password,
   {
    host:config.db.host,
    dialect:'postgres'
   }
)

try{
    sequelize.authenticate().then(async=>{
        console.log('[DB CONNECTED SUCCESFULLY]')
    })
}
catch(error){
    console.log("db not connected",error)
}

module.exports = sequelize