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
    let type = parent.querySelector('.products-list-ingredient').textContent;
    let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.add-product-button').textContent));

    plusFullPrice(priceNumber)
    printFullPrice();
    cardProductList.insertAdjacentHTML('beforeend', markupCard({title, priceNumber, id, type}));
    printQuantity();
    Notify.success('PRODUCT WAS ADDED IN CART');

    updateStorage();
};

// IF WE HAVE PRODUCT IN CART - PUT EVENT LISTENER FOR DELETE BUTTON
cardProductList.addEventListener('click', (e) => {
  const quantityValues = document.querySelectorAll('#value');
  quantityValues.forEach(quan => {
    if(e.target.closest('.prod-card').dataset.id === quan.dataset.id) {
      console.log(e.target.closest('.prod-card'));
      }
  })

  if(e.target.classList.contains('delete-product')) {
    deleteProduct(e.target.closest('.prod-card'));
  }
});



// MARKUP OF PRODUCT CARD
function markupCard ({id, title, priceNumber, type}) {
    return `<li class="prod-card" data-id="${id}">
    <h4 class="prod-card-title">"${title}"</h4>
    <p>${type}</p>
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
updateStorage();
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
    return price += currentPrice * quantity;
};
function minusFullPrice(currentPrice) {
    return price -= currentPrice * quantity;
};
function printFullPrice() {
    fullPrice.textContent = `${normalPrice(price)} UAH`;
};

function printQuantity() {
   let length = cardProductList.children.length;
   showQuantity.textContent = length;
};
function initialState() {
  if(localStorage.getItem('products') !== null) {
    cardProductList.innerHTML = localStorage.getItem('products');
    printQuantity();
    countSumm();
    printFullPrice();
     }
  };

function updateStorage() {
  let html = cardProductList.innerHTML;
  localStorage.setItem('products', html.trim());
};

function countSumm() {
  document.querySelectorAll('.prod-card').forEach(el => {
    price += parseInt(priceWithoutSpaces(el.querySelector('.card-content-price').textContent));
  });
};

initialState();