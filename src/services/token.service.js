const jwt = require('jsonwebtoken')
const moment = require('moment')
const httpStatus = require('http-status')
const config = require('../config/config')
const { tokenTypes } = require('../config/tokens')
const Token = require('../database/models/token')


/**
 * Generate Access token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {String} type
 * @param {String} [secret]
 * @returns {string}
 */

const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
    const payload = {
        sub : userId,
        iat : moment().unix(), //token issued at time
        exp: expires.unix(),
        type,
    }
    return jwt.sign(payload,secret)
}

// 11468fcb-be96-4c4f-af97-8949f4d49291
/**
 * Store Token in database
 * @param {string} token 
 * @param {ObjectId} userId 
 * @param {Moment} expires 
 * @param {String} type 
 * @param {boolean} blacklisted 
 * @returns 
 */
const saveToken = async (token, userId, expires, type,blacklisted=false )=>{
    return await Token.create({
        id:userId,
        token,
        expires:expires.toDate(),
        type,
        blacklisted
    })
}

/**
 * 
 * @param {Object} user 
 * @returns {Object} {ACCESS REFRESH TOKENS}
 */
const generateAuthTokens = async (user)=>{
    const accesTokenExpires = moment().add(config.jwt.accesTokenExpires,'minutes')
    console.log("accesstoken expires:",accesTokenExpires, " ", accesTokenExpires.toDate())
    const accessToken = generateToken(user.id,accesTokenExpires,tokenTypes.ACCESS)
    const refreshTokenExpires = moment().add(config.jwt.refreshTokenExpires,'days')
    const refreshToken = generateToken(user.id,refreshTokenExpires,tokenTypes.REFRESH)
    //store refresh token in database
    await saveToken(refreshToken,user.id,refreshTokenExpires,tokenTypes.REFRESH)

    //save Token
    return{
        access:{
            token:accessToken,
            expires:accesTokenExpires.toDate(),
        },
        refresh:{
            token:refreshToken,
            expires:refreshTokenExpires.toDate()
        }
    }
}

module.exports = {
    generateAuthTokens,
    generateToken
}