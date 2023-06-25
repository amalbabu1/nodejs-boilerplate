const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const User = require("../database/models/user")


const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    console.log("inside verify",payload)
    if (payload.type !==tokenTypes.ACCESS){
      throw new Error('Used wrongtoken type')
    }
    const user =await User.findOne({
      attributes:['id','name','email','role'],
      where:{id:payload.sub}
    }
    )
    if (!user) {
      return done(null, false);
    }
    return done(null, user.dataValues);
  } catch (error) {
    return done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};