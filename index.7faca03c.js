!function(){var e=[orange={id:1,name:"orange",type:"dark chocolate",price:45},apple={id:2,name:"apple & cranberry",type:"milk chocolate",price:50},lime={id:3,name:"lime & sea salt",type:"dark chocolate",price:66},pineapple={id:4,name:"pineapple",type:"dark chocolate",price:54},classic={id:5,name:"classic",type:"milk chocolate",price:45},honey={id:6,name:"honey",type:"milk chocolate",price:50},roasted={id:7,name:"roasted fruits",type:"dark chocolate",price:66},white={id:8,name:"classic",type:"white chocolate",price:54}];console.log(e);var t=document.querySelectorAll(".add-product-button"),n=document.querySelector(".products-cards"),c=[];document.querySelector("#value");function o(t){var o=t.target.getAttribute("value"),r=!0,i=!1,l=void 0;try{for(var d,p=e[Symbol.iterator]();!(r=(d=p.next()).done);r=!0){var u=d.value;if(e.indexOf(u)===o-1&&!c.includes(u)){c.push(u),n.insertAdjacentHTML("beforeend",a(u));var s=document.querySelector(".delete-product");console.log(s),localStorage.setItem("Product",JSON.stringify(c)),console.log(u.id),console.log(c)}}}catch(e){i=!0,l=e}finally{try{r||null==p.return||p.return()}finally{if(i)throw l}}}function a(e){return templateOfCard='<li class="prod-card">\n  <h4><span>'.concat(e.type,'</span>"').concat(e.name,'"</h4>\n  <div id="counter">\n    <button type="button" data-action="decrement">-1</button>\n    <span id="value">').concat(0,'</span>\n    <button type="button" data-action="increment">+1</button>\n  </div>\n  <h5>Price: <span>').concat(e.price,'</span></h5>\n  <button type="button" class="delete-product">Delete</button>\n</li>')}t.forEach((function(e){e.addEventListener("click",o)}))}();
//# sourceMappingURL=index.7faca03c.js.map
