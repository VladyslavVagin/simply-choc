import { products } from "./products";

//=================================================== ALL CONSTANT ==============================
const addProducts = document.querySelectorAll('.add-product-button');
const listOfProds = document.querySelector('.products-cards');
const totalCost = document.querySelector('.total-dinero');
const noProd = document.querySelector('.no-prod');
// =================================================================---------===================
let choosenProductsForCart = [];

//================================== FOR EACH ADD BUTTON PUT EVENT LISTENER =========================
 addProducts.forEach(addButton => addButton.addEventListener('click', addToCart));

// ======================================== FUNCTION FOR ADD CART ========================
function addToCart(event) {
  noProd.classList.add('is-hidden');
   const choosenProduct = event.currentTarget.getAttribute('value');

  // ======================== CHOOSE PRODUCT AND ADD TO LOCALSTORAGE ==================
   for ( let product of products ) {
    // ADD PRODUCT TO CART ONLY IF NO REPEAT 
    if (products.indexOf(product) === choosenProduct - 1 && !choosenProductsForCart.includes(product)) {
    choosenProductsForCart.push(product); 
    localStorage.setItem('Prod', JSON.stringify(choosenProductsForCart));
    listOfProds.insertAdjacentHTML('beforeend', markupProductCard(product));
    } 
   };
   console.log( listOfProds.children);
};


// ==================================================MARKUP CARD ====================================
function markupProductCard(product) {
   return  markupP = `<li class="prod-card">
    <h4 class="prod-card-title">${product.type} "${product.name}"</h4>
    <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">1</span>
      <button typ="button" data-action="increment">+1</button>
    </div>
    <h5>Price: <span>${product.price} UAH</span></h5>
    <button type="button" class="delete-product" value="${product.id}">Delete</button>
  </li>`;
};
// =====================================================================================================

function counterProd() {
  const counterValue = document.querySelector('#value');
  let result = 1;

  const btnIncrement = document.querySelector('[data-action="increment"]');
  const btnDecrement = document.querySelector('[data-action="decrement"]');

  btnIncrement.addEventListener('click', () => counterValue.textContent = result += 1);
   btnDecrement.addEventListener('click', () => counterValue.textContent = result -= 1);
};