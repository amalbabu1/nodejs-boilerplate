const express = require('express')
const userRoutes = require('./user.routes')
const authRoute = require('./auth.route')

const router = express.Router();

const defaultRoutes =[
    {
        path:'/auth',
        route: authRoute
    },
    {
        path:'/user',
        route:userRoutes
    }
]

defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route)
})

module.exports = router
