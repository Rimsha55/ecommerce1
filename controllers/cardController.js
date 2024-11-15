
const { createcartDTO } = require("../DTO/cart");
const prisma = require("../index");



const createCart = async (req, res) => {
  const { userId } = req;
  console.log("rimshaaaaa....", userId);

  const { productId, quantity } = req.body;

  try {
    const Cart = await prisma.addtocart.findUnique({

      where: { userId },
      include: {
        carditems: true,
      },
    });
    console.log(Cart);

    if (Cart) {
      const productInCart = Cart.carditems.find(
        (item) => item.products === productId
      );

      //  res.status(200).send({cartcreate})
      if (productInCart) {
        return res
          .status(400)
          .json({ message: "Product already exists in the cart" });
      }


      const updatedCart = await prisma.addtocart.update({
        where: { userId },
        data: {
          carditems: {
            create: {
              product_card: {
                connect: { product_id: productId },
              },

            },
          },
        },
        include: {
          carditems: true,
        },
      });
    
      return res.status(200).json({ cart: updatedCart });
    } else {

      const newCart = await prisma.addtocart.create({
        data: {
          userId,
          carditems: {
            create: {
              product_card: {
                connect: { product_id: productId },
              },

            },
          },
        },
        include: {
          carditems: true,
        },
      });

      return res.status(201).json({ cart: newCart });
    }
  } catch (error) {
    console.error("Error creating cart:", error);
    return res.status(500).json({ error: error.message });
  }
};


const getCart = async (req, res) => {
  const { userId } = req;
  try {
    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        carditems: {
          include: {
            product_cart: true,
          },
        },
      },
    });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.json({ cart });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateCarditems = async (req, res) => {
  const { userId } = req;
  const { quantity, productId } = req.body;
  try {
    const foundCart = await prisma.cart.findFirst({
      where: { userId },
      include: {
        carditems: {
          include: {
            product_cart: true,
          },
        },
      },
    });

    if (!foundCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const foundCartItem = foundCart.carditems.find(
      (item) => item.productId === productId
    );
    if (foundCarditem) {
      const updateCartItem = await prisma.carditems.update({
        where: {
          id: foundCartItem.id,
        },
        data: { quantity },
      });
      res.status(200).json({ updateCartItem });
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteCart = async (req, res) => {
  const { userId } = req;

  try {
    const foundCart = await prisma.cart.findUnique({
      where: { userId },
      include: { carditems: true },
    });

    if (!foundCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    await prisma.carditems.deleteMany({
      where: { cartId: foundCart.id },
    });

    await prisma.cart.delete({
      where: { id: foundCart.id },
    });

    res.status(200).json({ message: "Cart and carditems deleted" });
  } catch (error) {
    console.error("Error deleting cart:", error);
    res.status(400).json({ error: error.message });
  }
};

const deleteCarditems = async (req, res) => {
  const { cartItemId } = req.body;
  const deleteCartItem = await prisma.carditems.delete({
    where: {
      id: cartItemId,
    },
  });
  console.log(deleteCartItem);
  res.status(200).json({ deleteCartItem });
};


module.exports = {
  createCart,
  getCart,
  updateCarditems,
  deleteCart,
  deleteCarditems,
};