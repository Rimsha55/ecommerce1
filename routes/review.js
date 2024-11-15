const express = require("express");
const  router =express.Router();
const app = express() 


const { createReview } = require('../controllers/reviewController');
const verifyJWT = require("../middleware/verifyJWT");




// Route to create a review for a product in an order
router.post('/createReview',verifyJWT, createReview);

module.exports = router;


