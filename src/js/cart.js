import { Notify } from "notiflix";

const cardOfProduct = document.querySelectorAll('.prod-card');
const addToBtn = document.querySelectorAll('.add-product-button');
const closeCard = document.querySelectorAll('.delete-product');

cardOfProduct.forEach(card => card.classList.add('visually-hidden'));
addToBtn.forEach(addBtn => addBtn.addEventListener('click', addCard));
closeCard.forEach(closeBtn => closeBtn.addEventListener('click', onCloseCard));

// ADD CART FUNCTION 
function addCard(event) {
  addBtnValue = event.currentTarget.getAttribute('value');
  cardOfProduct.forEach(card => {
    if(card.getAttribute('value') === addBtnValue) {
      card.classList.remove('visually-hidden');
      Notify.success('PRODUCT WAS ADDED TO CART');
      card.childNodes[5].childNodes[3].textContent = 1;
    }
  });
};
// =================================================================

// FUNCTION DELETE CARD 
function onCloseCard(event) {
  closeBtnValue = event.currentTarget.getAttribute('value');
   cardOfProduct.forEach(card => {
    if(card.getAttribute('value') === closeBtnValue ||  card.childNodes[5].childNodes[3].textContent < 1) {
      card.classList.add('visually-hidden');
    } 
   })
};
// ===============================================
