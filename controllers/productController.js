
const prisma = require("../index");



const createProduct = async (req, res) => {

    try {
        const {
            productName, description, price, quantity, product_size, product_color
        } = req.body;
        const product = await prisma.product.create({
            data: {
                quantity,
                productName,
                description,
                price,
                product_size: {
                    create: product_size.map((size) => ({ size: size })),
                },
                product_color: {
                    create: product_color.map((color) => ({ color: color })),
                },
               
            },
            include: {
               
                product_size:true,
                product_color: true
            },
        })
        res.json({ product });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: error.message });
    }

};

const getProduct = async (req, res) => {
    try {
        const products = await prisma.Product.findMany({
            select: {
                productName: true,
                quantity: true,
                price: true,
                describe: true,
                product_size: {
                    select: {
                        size: true
                    }
                },
                product_color: {
                    select: {
                        color: true,
                    }
                },

            }


        })
        console.log({ product });
        res.json({ product })

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};


const getproductId = async (req, res) => {
    const { product_id } = req.params
    try {
        const product = await prisma.product.findfirst({
            where: {
                product_id
            },
            include: {
                product_size: {
                    select: {
                        size: true
                    }
                },
                product_color: {
                    select: {
                        color: true,
                    }
                }
            }


        })
        console.log(product);
        res.json({ product });


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const Updateproduct = async (req, res) => {
    const { product_id } = req.params;
    try {
        const data = req.body;
        if (data.product_size) {
            data.product_size = {
                create: data.product_size.map((size) => ({ size: size }))
            };
        }
        if (data.product_color) {
            data.product_color = {
                create: data.product_color.map((color) => ({ colors: color }))
            };
        }

        const product = await prisma.product.update({
            where: { id },
            data,
            include: {
                product_size: {
                    select: {
                        sizes: true
                    }
                },
                product_color: {
                    select: {
                        colors: true
                    }
                }
            }
        });

        res.json({ product });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: error.message });
    }
};



module.exports = { createProduct, getProduct,getproductId , Updateproduct };



