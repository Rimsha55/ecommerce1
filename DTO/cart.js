function createcartDTO(createcart){
    if (!createcart) {
        console.error("No cart info provided to DTO");
        return null;
      }
     console.log(createcart,".....");
      
  return {
    productId: createcart.productId || null,
    
  };
}
module.exports ={createcartDTO};
