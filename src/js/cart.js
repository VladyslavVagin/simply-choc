import { products } from "./products";
console.log(products);

const addProducts = document.querySelectorAll('.add-product-button');
let choosenProductsForCart = [];

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
        localStorage.setItem('Product', JSON.stringify(choosenProductsForCart));
        console.log(product.id);
        console.log(choosenProductsForCart);
     }
   }
};