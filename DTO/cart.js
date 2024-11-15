const { log } = require("console");

const  cartDTO= (readCart) =>{
    console.log(readCart,".....");
         return{
        
        // ProductId:readCart.CartItems.map((items)=>({
        //     ProductId: items.ProductId
        // })) || null,
        userId:readCart.UserId,
        cartItems:readCart.carditems.map((items)=>({
             
            products:items.products 
        })) || null,
    }
    
   
}
module.exports ={cartDTO}