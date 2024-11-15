
let createproductDTO = function (productinfo) {
  if (!productinfo) {
    console.error("No user info provided to DTO");
    return null;
  }
console.log(productinfo.product_size[0].size,".......///////");


  return {

    product: productinfo.productName || null,
    quantity: productinfo.quantity || null,
    description: productinfo.description || null,
    price: productinfo.price || null,
    product_size: productinfo.product_size[0].sizes|| null,
    product_color: productinfo.product_color.map((value) => ({ color: value.color })) || null
  };
}

 let getproductDTO = (product) => {
    console.log(product);
    const products = product.map((item, index) => {
      return {
        serialNumber: index + 1,
        ProductName: item.productName || null,
        Price: item.price || null,
        Quantity: item.quantity|| null,
        ProductSize: item. product_size.map((val) => ({ size: val.size })) || null,
  
        ProductColor:
          item.product_color.map((val) => ({ color: val.color })) || null,
      };
    });
  
    return { products, length: products.length };
  };


module.exports = { createproductDTO,getproductDTO };