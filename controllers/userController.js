const prisma = require("../index");
require('dotenv').config();
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken')

const createUser = async(req,res)=>{
    try {
        const {name,email,password,address} = req.body
        console.log(email);
        
        const matchUser = await prisma.user.findFirst({
            where:{
                email,
            }
        })
        if (matchUser) {
            return res.status(400).json({error:"User already exist"})
        }
        const hashedPass = await bcrypt.hash(password,10)
        const user = await prisma.user.create({
            data:{
                name,
                email,
                address,
                user_secret:{
                    create:{
                        password:hashedPass
                    }
                }
            },
            include:{
                user_secret:true
            }
        })
        console.log(user);
        res.status(200).send(user)
        
    } catch (error) {
        console.log(error);
        res.json({error})
        
    }
    
}



const login = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    const matchedUser = await prisma.user.findFirst({
      where: { email },
      include: { user_secret: true }
    });
   console.log(matchedUser,"............");
   
    if (!matchedUser) {
      return res.status(404).json({ error: "User doesn't exist" });
    }
    const hashedPass =  bcrypt.compare(password, matchedUser.user_secret?.password);
    if (!hashedPass) {
      return res.sendStatus(401);
    }
    const accessToken = jwt.sign(
      { user: matchedUser.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    console.log("matchedUser");
    
    const refreshToken = jwt.sign(
      { user: matchedUser.id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const userSession = await prisma.session.create({
      data: {
        refreshToken,
        userId: matchedUser.id
      }
    });

    console.log(userSession);
    res.json({ user: matchedUser, accessToken, refreshToken });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};


module.exports = {createUser, login};