const jwt = require('jsonwebtoken');
require('dotenv').config();


const verifyJWT = (req, res, next) => {
  
  const authHeader = req.headers["authorization"];
  
  if (!authHeader) return res.sendStatus(401);
  
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("this is err",err);
      
      return res.sendStatus(403)};
    req.userId =decoded.user;

    next();
  });
};
module.exports = verifyJWT