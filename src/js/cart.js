import products from './products';
console.log(products);

const addProduct = document.querySelectorAll('.add-product-button');

addProduct.forEach(addBtn => addBtn.addEventListener('click', addProductToCart));

function addProductToCart(event) {
    event.preventDefault();
};


