const app =  require('./app')
const config = require('./config/config')


app.listen(config.port,()=>{
  console.log( `Listening on PORT ${config.port}`)
})

