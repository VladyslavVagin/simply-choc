import { Notify } from "notiflix";

// MAKE CONSTANT 
const addProductToCart = document.querySelectorAll('.add-product-button');
const fullPrice = document.querySelector('.total-dinero');
const cardProductList = document.querySelector('.products-cards');
const showQuantity = document.querySelector('.quantity-products');
let price = 0;
let quantity = 1;

// ADD EVENT LISTENER FOR ADD BUTTONS
addProductToCart.forEach(addButton => {
     addButton.closest('.products-list-item').setAttribute("data-id", randomId());
     addButton.addEventListener('click', onAddProduct);
});
    
// FUNCTION WHEN WE ADD PRODUCT TO CART
function onAddProduct(el) {
    el.preventDefault();
    let self = el.currentTarget;
    let parent = self.closest('.products-list-item');
    let id = parent.dataset.id;
    let title = parent.querySelector('.products-list-name').textContent;
    let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.add-product-button').textContent));

    plusFullPrice(priceNumber)
    printFullPrice();
    cardProductList.insertAdjacentHTML('beforeend', markupCard({title, priceNumber, id}));
    printQuantity();
    Notify.success('PRODUCT WAS ADDED IN CART');
    self.disabled = true;

    const quantityValues = document.querySelector('#value');
    const decrement = document.querySelector('[data-action="decrement"]');
    const increment = document.querySelector('[data-action="increment"]');
    let quantityProd = Number(quantityValues.textContent);
    console.log(quantityProd);
};


// IF WE HAVE PRODUCT IN CART - PUT EVENT LISTENER FOR DELETE BUTTON
cardProductList.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete-product')) {
    deleteProduct(e.target.closest('.prod-card'));
  }
});



// MARKUP OF PRODUCT CARD
function markupCard ({id, title, priceNumber}) {
    return `<li class="prod-card" data-id="${id}">
    <h4 class="prod-card-title">"${title}"</h4>
    <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value" class="quant">1</span>
      <button type="button" data-action="increment">+1</button>
    </div>
    <h5>Price: <span class="card-content-price">${normalPrice(priceNumber)}</span> UAH</h5>
    <button type="button" class="delete-product" value="1">Delete</button>
  </li>`;
};

// FUNCTION WHEN DELETE PRODUCT FROM CART
function deleteProduct(productParent) {
let id = productParent.dataset.id;
addProductToCart.forEach(addButton => {
  if (id === addButton.closest('.products-list-item').getAttribute('data-id')) {
    addButton.disabled = false;
  }
})
// RECALCULATE THE FINAL TOTAL PRICE
let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.card-content-price').textContent));
minusFullPrice(currentPrice);
printFullPrice();
productParent.remove();
printQuantity();
};

function randomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

function priceWithoutSpaces(str) {
    return str.replace(/\s/g, '');
};

function normalPrice(str) {
    return String(str).replace(/(\d)(?=(\d\d\d) + ([^\d]|$))/g, '$1 ');
};

function plusFullPrice(currentPrice) {
    return price += currentPrice;
};
function minusFullPrice(currentPrice) {
    return price -= currentPrice;
};
function printFullPrice() {
    fullPrice.textContent = `${normalPrice(price)} UAH`;
};

function printQuantity() {
   let length = cardProductList.children.length;
   showQuantity.textContent = length;
};