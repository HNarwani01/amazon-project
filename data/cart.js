export const cart =[];
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