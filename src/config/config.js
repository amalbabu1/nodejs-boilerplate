const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path:path.join(__dirname,'../../.env')});


module.exports ={
    env:process.env.NODE_ENV,
    port:process.env.PORT,
    jwt:{
        secret:process.env.JWT_SECRET
    },
    db:{
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        database:process.env.DB_DATABASE,
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD
    }
};