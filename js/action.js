import renderMyCart from "./renderMycart.js";
import renderEmptyCart from "./emptyCart.js";
import { renderCheckoutCart } from "./checkout.js";
import { module } from "./renderData.js";
let carts = JSON.parse(localStorage.getItem("cart")) || [];
const addCart = (item, uid) => {
  const index = carts.findIndex((cart) => cart.uid === uid);
  if (index === -1) {
    const updateCart = { ...item, uid, num: 1 };
    carts.push(updateCart);
  }
  localStorage.setItem("cart", JSON.stringify(carts));
  renderEmptyCart(carts);
  renderMyCart(carts);
  module(carts);
  renderCheckoutCart(carts);
};
const removeCartItem = (uid) => {
  carts = carts.filter((cart) => cart.uid !== uid);
  localStorage.setItem("cart", JSON.stringify(carts));
  renderMyCart(carts);
  module(carts);
  renderEmptyCart(carts);
  renderCheckoutCart(carts);
};
const increment = (uid) => {
  const index = carts.findIndex((item) => item.uid === uid);
  if (carts[index]) {
    carts[index].num++;
    localStorage.setItem("cart", JSON.stringify(carts));
    renderMyCart(carts);
    module(carts);
    renderCheckoutCart(carts);
  }
};
const decrement = (uid) => {
  const index = carts.findIndex((item) => item.uid === uid);
  if (carts[index]) {
    if (carts[index].num > 1) {
      carts[index].num--;
      localStorage.setItem("cart", JSON.stringify(carts));
      renderMyCart(carts);
      module(carts);
      renderCheckoutCart(carts);
    }
  }
};
export { removeCartItem, addCart, increment, decrement };
