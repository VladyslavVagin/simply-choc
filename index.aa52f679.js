!function(){var t=document.querySelectorAll(".add-product-button"),e=document.querySelector(".total-dinero"),n=document.querySelector(".products-cards"),r=document.querySelector(".quantity-products"),c=0;function o(t){t.preventDefault();var e=t.currentTarget,r=e.closest(".products-list-item"),o=r.dataset.id,s=r.querySelector(".products-list-name").textContent,l=parseInt(a(r.querySelector(".add-product-button").textContent));c+=l,i(),n.insertAdjacentHTML("beforeend",function(t){var e=t.id,n=t.title,r=t.priceNumber;return'<li class="prod-card" data-id="'.concat(e,'">\n    <h4 class="prod-card-title">"').concat(n,'"</h4>\n    <div id="counter">\n      <button type="button" data-action="decrement">-1</button>\n      <span id="value">0</span>\n      <button type="button" data-action="increment">+1</button>\n    </div>\n    <h5>Price: <span class="card-content-price">').concat(d(r),'</span> UAH</h5>\n    <button type="button" class="delete-product" value="1">Delete</button>\n  </li>')}({title:s,priceNumber:l,id:o})),u(),e.disabled=!0}function a(t){return t.replace(/\s/g,"")}function d(t){return String(t).replace(/(\d)(?=(\d\d\d) + ([^\d]|$))/g,"$1 ")}function i(){e.textContent="".concat(d(c)," UAH")}function u(){var t=n.children.length;r.textContent=t}t.forEach((function(t){t.closest(".products-list-item").setAttribute("data-id",Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),t.addEventListener("click",o)})),n.addEventListener("click",(function(e){var n,r,o;e.target.classList.contains("delete-product")&&(r=e.target.closest(".prod-card"),o=r.dataset.id,t.forEach((function(t){o===t.closest(".products-list-item").getAttribute("data-id")&&(t.disabled=!1)})),n=parseInt(a(r.querySelector(".card-content-price").textContent)),c-=n,i(),r.remove(),u())}))}();
//# sourceMappingURL=index.aa52f679.js.map