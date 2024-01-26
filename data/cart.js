export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  

[{
  productid: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
  quantity: 3
},
{
  productid: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
  quantity: 1
}]
}
export function addtocart(productid) {
  let matchingItem;
  cart.forEach((cartitem) => {
    if (productid === cartitem.productid) {
      matchingItem = cartitem;
    }
  });//closing the forEach loop here 
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productid: productid,
      quantity: 1
    })
  }
  saveToStorage()
}
export function saveToStorage() {
  localStorage.setItem('cart',JSON.stringify(cart))
}
export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) =>{
    if(cartItem.productid !==productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage()
}