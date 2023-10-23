import { products } from "./products";
console.log(products);

const addProducts = document.querySelectorAll('.add-product-button');
const listOfProducts = document.querySelector('.products-cards');
let choosenProductsForCart = [];

// ======================== COUNTER VALUE =======================================
const counterValue = document.querySelector('#value');
let result = 0;

// const btnIncrement = document.querySelector('[data-action="increment"]');
// const btnDecrement = document.querySelector('[data-action="decrement"]');

// btnIncrement.addEventListener('click', () => counterValue.textContent = result += 1);
// btnDecrement.addEventListener('click', () => counterValue.textContent = result -= 1);
// =================================================================================
chooseProduct();

function chooseProduct () {
    addProducts.forEach(addProdButton => {
        addProdButton.addEventListener('click', addToCart);
    })
};

function addToCart(event) {
   const choosenProduct = event.target.getAttribute('value');
   for (let product of products) {
     if (products.indexOf(product) === choosenProduct - 1 && !choosenProductsForCart.includes(product)) {
        choosenProductsForCart.push(product);
        listOfProducts.insertAdjacentHTML('beforeend', markupProductCard(product));

        // DELETE BUTTON 
        const deleteProductButtons = document.querySelector('.delete-product');
        console.log(deleteProductButtons);

        localStorage.setItem('Product', JSON.stringify(choosenProductsForCart));
        console.log(product.id);
        console.log(choosenProductsForCart);
     }
   }
};


//================================== MARKUP PRODUCT CARDS=================================== 
function markupProductCard (product) {
  return templateOfCard = `<li class="prod-card">
  <h4><span>${product.type}</span>"${product.name}"</h4>
  <div id="counter">
    <button type="button" data-action="decrement">-1</button>
    <span id="value">${result}</span>
    <button type="button" data-action="increment">+1</button>
  </div>
  <h5>Price: <span>${product.price}</span></h5>
  <button type="button" class="delete-product">Delete</button>
</li>`;
};

// =========================================================================================