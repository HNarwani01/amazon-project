import {cart,addtocart} from '../data/cart.js';//we cal also do import {cart as anyVariableName } from 'path';
import {product} from '../data/products.js';
import {formatcurrency} from '../utils/monkey.js'

product.forEach ((products)=> {
  let templateHtml = `<div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${products.image}">
        </div>
    
        <div class="product-name limit-text-to-2-lines">
          ${products.name}
        </div>
    
        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${products.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${products.rating.count}
          </div>
        </div>
    
        <div class="product-price">
          $${formatcurrency(products.priceCents)}
        </div>
    
        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
    
        <div class="product-spacer"></div>
    
        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>
    
        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${products.id}">
          Add to Cart
        </button>
      </div> `;
      document.querySelector('.products-grid').innerHTML += templateHtml;
  // let editDiv = document.querySelector('.products-grid');
  // editDiv.innerHTML += templateHtml;
  }
)

function updateCartQuantity() {
  let cartquantity=0;
    cart.forEach((cartitem)=>{
      cartquantity += cartitem.quantity
    })
    document.querySelector('.js-cart-quantity').innerHTML=cartquantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    // console.log(button.dataset.productId);
    const productid = button.dataset.productId;
    addtocart(productid)
    updateCartQuantity()

    
  })
})



/*
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    const productName = button.dataset.productName;
    let matchingItem;
    cart.forEach((item)=>{
      if(productName===item.productName){
        matchingItem=item;
        }
      });
      if(matchingItem){
        matchingItem.quantity +=1;
      }else{
        cart.push({
          productName:productName,
          quantity:1
        })
      }
      console.log(cart)
    }); 
  });
*/
