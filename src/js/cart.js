import { products } from "./products";

const addProducts = document.querySelectorAll('.add-product-button');
const listOfProds = document.querySelector('.products-cards');
const totalCost = document.querySelector('.total-dinero');
console.log(totalCost.textContent);
let choosenProductsForCart = [];

 addProducts.forEach(addButton => addButton.addEventListener('click', addToCart));

function addToCart(event) {
   const choosenProduct = event.currentTarget.getAttribute('value');
   for ( let product of products ) {
    if (products.indexOf(product) === choosenProduct - 1 && !choosenProductsForCart.includes(product)) {
    console.log(product);
    listOfProds.insertAdjacentHTML('beforeend', markupProductCard(product));
    choosenProductsForCart.push(product); 
    localStorage.setItem('Prod', JSON.stringify(choosenProductsForCart));
    } 
   }
};


// ==================================================MARKUP CARD ====================================
function markupProductCard(product) {
   return  markupP = `<li class="prod-card">
    <h4 class="prod-card-title">${product.type} "${product.name}"</h4>
    <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">1</span>
      <button type="button" data-action="increment">+1</button>
    </div>
    <h5>Price: <span>${product.price} UAH</span></h5>
    <button type="button" class="delete-product" value="${product.id}">Delete</button>
  </li>`;
};