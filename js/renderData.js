import { addCart, decrement, increment } from "./action.js";
const categories = document.getElementById("cart-categories");
let carts = JSON.parse(localStorage.getItem("cart")) || [];

const module = async (carts) => {
  try {
    const result = await import("../data.json", {
      with: { type: "json" },
    });
    const data = result.default;
    categories.innerHTML = data
      .map((item) => {
        return `
           <div id=${item.uid} class="cart-item">
              <div class="cart-image">
              <img class='desktop-img' src=${item.image.desktop} alt="" />
                <img class='mobile-img' src=${
                  item.image.mobile
                } class='hidden' alt="" />
                      <div class="add">
     <div class="add-logo">
   <img src="./assets/images/icon-add-to-cart.svg" alt="" />
  </div>
  <span class="add-text">Add to cart</span>
  </div>
                 <div class="cart-action hidden">
<div class="decrement">
   <img src="./assets/images/icon-decrement-quantity.svg" alt="" />
</div>
<span id class='count'>0</span>
<div class="increment">
<img src="./assets/images/icon-increment-quantity.svg" alt="" /></div>
</div> 
              </div>
              
              <div class="cart-infor">
                <p class="category">${item.category}</p>
                <p class="name">${item.name}</p>
                <p class="price">${`$` + item.price.toFixed(2)}</p>
              </div>
            </div>
      `;
      })
      .join("");
    const cartSelector = document.querySelectorAll(".cart-item");
    // check product in cart
    carts.forEach((e) => {
      const index = data.findIndex((item) => item.uid === e.uid);
      if (index !== -1) {
        cartSelector[index].querySelector(".add").classList.add("hidden");
        const allImage = cartSelector[index].querySelectorAll(".cart-image");
        allImage.forEach((e) => {
          e.querySelector(".desktop-img").style.border =
            "3px solid hsl(14, 86%, 42%)";
          e.querySelector(".mobile-img").style.border =
            "3px solid hsl(14, 86%, 42%)";
        });
        cartSelector[index]
          .querySelector(".cart-action")
          .classList.remove("hidden");
      }
    });
    // check
    cartSelector.forEach((e) => {
      const index = carts.findIndex((item) => item.uid === e.id);
      if (carts[index]) {
        e.querySelector(".count").innerHTML = `${carts[index].num}`;
      }
    });
    //
    const addSelector = document.querySelectorAll(".add");
    addSelector.forEach((element, index) => {
      element.addEventListener("click", () => {
        addCart(data[index], data[index].uid);
      });
    });
    // increment product
    const incrementSelector = document.querySelectorAll(".increment");
    incrementSelector.forEach((e, index) => {
      e.addEventListener("click", () => {
        increment(data[index].uid);
      });
    });

    // decrement product
    const decrementSelector = document.querySelectorAll(".decrement");
    decrementSelector.forEach((e, index) => {
      e.addEventListener("click", () => {
        decrement(data[index].uid);
      });
    });
  } catch (err) {
    console.log(err);
  }
};
module(carts);
export { module };
