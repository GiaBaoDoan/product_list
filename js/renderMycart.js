import renderEmptyCart from "./emptyCart.js";
import { removeCartItem } from "./action.js";
const myCart = document.getElementById("my-cart");
const totalPrice = document.getElementById("total-price");
const carts = JSON.parse(localStorage.getItem("cart")) || [];
const renderCarts = (cart) => {
  myCart.innerHTML = `
   <div class="cart-list">
        ${cart
          .map((item) => {
            return `
        <div class="my-item">
          <div class="infor-item">
            <p class="name">${item.name}</p>
            <div class="number">
              <span class="count">${item.num}x</span>
              <span class="price">@ ${item.price.toFixed(2)}</span>
              <spam class="sumPrice"
                >$${(item.num * item.price).toFixed(2)}</spam
              >
            </div>
          </div>
          <button class="delete-item">
            <img src="./assets/images/icon-remove-item.svg" alt="" />
          </button>
        </div>
        `;
          })
          .join("")}
      </div>`;
  // total-price
  totalPrice.innerHTML = `$${cart.reduce(
    (total, item) => item.price * item.num + total,
    0
  )}`;
  //
  const deleteSelector = document.querySelectorAll(".delete-item");
  deleteSelector.forEach((e, index) => {
    e.addEventListener("click", () => {
      removeCartItem(cart[index].uid);
    });
  });
};
renderEmptyCart(carts);
renderCarts(carts);
export default renderCarts;
