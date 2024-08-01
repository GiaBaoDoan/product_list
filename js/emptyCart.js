const emptyCart = document.getElementById("empty-cart");
const cartPay = document.querySelectorAll(".cart-pay");
const totalProducts = document.getElementById("total-products");
const renderEmptyCart = (carts) => {
  if (carts.length) {
    emptyCart.classList.add("hidden");
    cartPay.forEach((element) => {
      element.classList.remove("hidden");
    });
  } else {
    emptyCart.classList.remove("hidden");
    cartPay.forEach((element) => {
      element.classList.add("hidden");
    });
  }
  totalProducts.innerHTML = `(${carts.reduce(
    (total, item) => item.num + total,
    0
  )})`;
};
export default renderEmptyCart;
