const prisma = require("../index");

const createOrder = async (req, res) => {
  const  {userId}  = req;
  const {
    tot_amount, 
    contact,
    address,
    payment,
    product_Id,
    quantity,
    status,
    price
  } = req.body;

  try {
    const order = await prisma.order.create({
      data: {
        userId,
        tot_amount, 
        contact,
        address,
        payment,
        status,
        orderItem: {
          create: {
            productid: product_Id,
            quantity: quantity,
            price: price,
          
          },
        },
      },
      include: {
        orderItem: {
          include: { 
            product_item: true,
          },
        },
      },
    });

    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      
     
      include: {
        orderItem: true,
        
        
      },
    });

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserOrders = async (req, res) => {
  const { userId } = req;
  try {
    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        orderItem: true, 
      },
    });

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const getOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        orderItems: true,
      },
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; 

  try {
    const order = await prisma.order.update({
      where: { id },
      data: {
        status,
      },
      
    });

    res.json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await prisma.order.delete({
      where: { id: orderId },
    });

    res.status(200).json({ message: "Order deleted successfully", order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { createOrder,getAllOrders,getUserOrders,updateOrderStatus };