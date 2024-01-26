import { cart,remoceFromCart } from "../data/cart.js";
import { product } from "../data/products.js";
import {formatcurrency} from '../utils/money.js'

cart.forEach(cartelement => {
  product.forEach(totalproduct => {
    if (cartelement.productid == totalproduct.id) {
      
      let insidehtml = `<div class="cart-item-container">
<div class="delivery-date">
  Delivery date: Tuesday, June 21
</div>

<div class="cart-item-details-grid">
  <img class="product-image"
    src="${totalproduct.image}">

  <div class="cart-item-details">
    <div class="product-name">
      ${totalproduct.name}
    </div>
    <div class="product-price">
      $${formatcurrency(totalproduct.priceCents)}
    </div>
    <div class="product-quantity">
      <span>
        Quantity: <span class="quantity-label">${cartelement.quantity}</span>
      </span>
      <span class="update-quantity-link link-primary">
        Update
      </span>
      <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id=${totalproduct.id} >
        Delete
      </span>
    </div>
  </div>

  <div class="delivery-options">
    <div class="delivery-options-title">
      Choose a delivery option:
    </div>
    <div class="delivery-option">
      <input type="radio" checked
        class="delivery-option-input"
        name="delivery-option-${totalproduct.id}">
      <div>
        <div class="delivery-option-date">
          Tuesday, June 21
        </div>
        <div class="delivery-option-price">
          FREE Shipping
        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${totalproduct.id}">
      <div>
        <div class="delivery-option-date">
          Wednesday, June 15
        </div>
        <div class="delivery-option-price">
          $4.99 - Shipping
        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${totalproduct.id}">
      <div>
        <div class="delivery-option-date">
          Monday, June 13
        </div>
        <div class="delivery-option-price">
          $9.99 - Shipping
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
      document.querySelector('.js-order-summary').innerHTML += insidehtml;
    }
  });
});

document.querySelectorAll('.js-delete-quantity-link').forEach((link) =>{
  link.addEventListener('click',()=>{
    console.log(`deleting now`)
    const produt =link.dataset.productId;
    console.log(produt);
    remoceFromCart(produt)
    console.log(cart)
  })
})


