const express = require("express");
const  router =express.Router();
const app = express() 

const {createUser,login } = require("../controllers/userController")

router.post('/signup',createUser)
router.post('/login',login)

module.exports = router
