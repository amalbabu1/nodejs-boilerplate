const app =  require('./app')
const config = require('./config/config')
const User = require('./database/models/user')
const Token = require('./database/models/token')

app.listen(config.port,()=>{
  console.log( `Listening on PORT ${config.port}`)
})


User.sync()
Token.sync()