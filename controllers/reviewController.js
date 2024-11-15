const prisma = require("../index");
require('dotenv').config();

// const createReview = async (req, res) => {
//   const { userId } = req
//   const { productId, comment } = req.body;


//   try {
//     const ordercheck = await prisma.order.findMany({
//       where: {
//         userId
//       }

//     });
//     // console.log(ordercheck);
//     const delivered = ,
// if (ordercheck) {
//   const statusChecked = ordercheck.filter(order=>order.status==="DELIVERED")
//   console.log(statusChecked);
// }

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "An error occurred while creating the review" });
//   }
// };
// controllers/reviewController.js
// Import prisma client

// Controller to handle creating a review for a product in an order
const createReview = async (req, res) => {
  const { userId } = req
const {productId} = req.body
  console.log(userId)
  try {
    // Check if the order exists and if the product is part of that order
    const order = await prisma.order.findMany({
      where: {
        userId,
      },
      include: {
        orderItem: {
          include: {
            product_item: true
          }
        }
      }
    });
    if (order) {
      const delivered = order.filter(item => item.status === 'DELIVERED')
      const foundProduct = delivered.orderItem.filter(item=>item.productid===productId)
       console.log("this is delivered", foundProduct);
       res.status(201).json(foundProduct);  // Return the created review
    }
   


    res.status(201).json(order);  // Return the created review
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating review.' });
  }
};

module.exports = { createReview };



