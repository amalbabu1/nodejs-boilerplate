const app =  require('./app')
const config = require('./config/config')
const User = require('./database/models/user')


app.listen(config.port,()=>{
  console.log( `Listening on PORT ${config.port}`)
})


User.sync()