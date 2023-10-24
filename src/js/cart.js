import { Notify } from "notiflix";

const cardOfProduct = document.querySelectorAll('.prod-card');
const addToBtn = document.querySelectorAll('.add-product-button');
const counter = document.querySelectorAll('#value');

cardOfProduct.forEach(card => card.classList.add('visually-hidden'));
addToBtn.forEach(addBtn => addBtn.addEventListener('click', addCard));

function addCard(event) {
  addBtnValue = event.currentTarget.getAttribute('value');
  cardOfProduct.forEach(card => {
    if(card.getAttribute('value') === addBtnValue) {
      card.classList.remove('visually-hidden');
      Notify.success('PRODUCT WAS ADDED TO CART');
    }
  });
};