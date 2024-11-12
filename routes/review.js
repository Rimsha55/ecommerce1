const express = require("express");
const  router =express.Router();
const app = express() 


const { createReview ,getReviewsByProduct,updateReview,deleteReview } = require("../controllers/reviewController");

router.post('/add',createReview)









router.get('/:productId', getReviewsByProduct);

router.put('/:reviewId', updateReview);


router.delete('/:reviewId',deleteReview);

module.exports = router;
