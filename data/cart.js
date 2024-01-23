export const cart =[{
  productid:"6b07d4e7-f540-454e-8a1e-363f25dbae7d",
  quantity:3
},
{
  productid:"a82c6bac-3067-4e68-a5ba-d827ac0be010",
  quantity:1
}];
export function addtocart(productid) {
    let matchingItem;
      cart.forEach((cartitem)=>{
        if (productid===cartitem.productId) {
          matchingItem=item;
        }
      });//closing the forEach loop here 
      if (matchingItem) {
        matchingItem.quantity +=1;
      } else {
        cart.push({
          productid:productid,
          quantity:1
        })
      }
  }