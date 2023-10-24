import {products} from './products';

const addProductToCart = document.querySelectorAll('.add-product-button');
const fullPrice = document.querySelector('.total-dinero');

addProductToCart.forEach(addButton => {
     addButton.closest('.products-list-item').setAttribute("data-id", randomId());
     addButton.addEventListener('click', onAddProduct);
});
    

function onAddProduct(el) {
    el.preventDefault();
    let self = el.currentTarget;
    let parent = self.closest('.products-list-item');
    let id = parent.dataset.id;
    let img = parent.querySelector('.products-list-img').getAttribute('src');
    let title = parent.querySelector('.products-list-name').textContent;
    let priceString = parent.querySelector('.add-product-button').textContent;
    let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.add-product-button').textContent));
    console.log(priceNumber);


};

function markupCard ({id, name, type, price, url}) {
    return `<li class="prod-card" data-id="${id}">
    <img src="${url}" alt="${type}" width="60" height="60" />
    <h4 class="prod-card-title">"${name}"</h4>
    <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div>
    <h5>Price: ${price} UAH</h5>
    <button type="button" class="delete-product" value="1">Delete</button>

  </li>`;
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