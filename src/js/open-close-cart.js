 function cartOpenClose() {
    const refs = {
      openCartBtn: document.querySelector('[data-cart-open]'),
      closeCartBtn: document.querySelector('[data-cart-close]'),
      cartData: document.querySelector('[data-cart]')
    };
  
    refs.openCartBtn.addEventListener('click', cartAction);
    refs.closeCartBtn.addEventListener('click', cartAction);
  
     function cartAction() {
      refs.cartData.classList.toggle('is-hidden');
     };
    };

    cartOpenClose();