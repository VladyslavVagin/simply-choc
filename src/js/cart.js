import { products } from "./products";
console.log(products);

const addProducts = document.querySelectorAll('.add-product-button');

chooseProduct();

function chooseProduct () {
    addProducts.forEach(addProdButton => {
        addProdButton.addEventListener('click', addToCart);
    })
};

function addToCart(event) {
   const choosenProduct = event.target.getAttribute('value');
   for (let product of products) {
     if (products.indexOf(product) === choosenProduct - 1) {
        console.log(product);
     }
    
   }
      console.log(choosenProduct);
};