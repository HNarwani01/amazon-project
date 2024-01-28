import { cart, removeFromCart } from "../data/cart.js";
import { product } from "../data/products.js";
import { formatcurrency } from '../utils/money.js'
import { deliveryOptions } from "../data/deliveryOptions.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";





cart.forEach(cartelement => {
  product.forEach(totalproduct => {
    if (cartelement.productid == totalproduct.id) {

      let insidehtml = `<div class="cart-item-container js-cart-item-container-${totalproduct.id}">
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
    
    ${deliveryOptionsHTML(totalproduct)}
    
  </div>
</div>
</div>`;
      document.querySelector('.js-order-summary').innerHTML += insidehtml;
    }
  });
});


function deliveryOptionsHTML(totalproduct) {
  let html='';
  deliveryOptions.forEach(deliveryOption => {
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');
    const priceString = deliveryOption.priceCents===0?'FREE':formatcurrency(deliveryOption.priceCents);
    html +=`
      <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${totalproduct.id}">
      <div>
        <div class="delivery-option-date">
          ${dateString}
        </div>
        <div class="delivery-option-price">
          $${priceString} Shipping
        </div>
      </div>
    </div>
  `
})
return html;
}
document.querySelectorAll('.js-delete-quantity-link').forEach((link) => {
  link.addEventListener('click', () => {
    console.log(`deleting now`)
    const produt = link.dataset.productId;
    console.log(produt);
    removeFromCart(produt)
    console.log(cart)
    document.querySelector(`.js-cart-item-container-${produt}`).remove()
  })
})


