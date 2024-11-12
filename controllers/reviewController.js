const prisma = require("../index");
require('dotenv').config();

const createReview = async (req, res) => {
  
  const { productId, userId, comment } = req.body;


  try {
     const userReview = await prisma.order.findFirst({
      where:{
        userId
      }
     })
     console.log(userReview);
     
    return res.status(201).json(userReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while creating the review" });
  }
};

const getReviewsByProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const reviews = await prisma.review.findMany({
      where: { productId },
      include: {
        user_review: { select: { name: true, email: true } }, // Include user details
      }
    });
    return res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while fetching reviews" });
  }
};


const updateReview = async (req, res) => {
  const { reviewId } = req.params;
  const { comment } = req.body;

  try {
    const updatedReview = await prisma.review.update({
      where: { id: reviewId },
      data: { comment }
    });
    return res.status(200).json(updatedReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while updating the review" });
  }
};

const deleteReview = async (req, res) => {
  const { reviewId } = req.params;

  try {
    await prisma.review.delete({
      where: { id: reviewId }
    });
    return res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while deleting the review" });
  }
};
module.exports ={createReview,getReviewsByProduct,
  updateReview,
  deleteReview}

