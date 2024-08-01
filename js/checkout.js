const carts = JSON.parse(localStorage.getItem("cart")) || [];
const checkout = document.getElementById("checkout");
const checkoutList = document.getElementById("checkout-list");
const overlay = document.getElementById("overlay");
const comfirm = document.getElementById("confirm");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutConfirmed = document.getElementById("checkout-confirmed");
comfirm.addEventListener("click", () => {
  checkout.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
checkoutConfirmed.addEventListener("click", () => {
  checkout.classList.add("hidden");
  overlay.classList.add("hidden");
});
const renderCheckoutCart = (carts) => {
  checkoutList.innerHTML = `
       ${carts
         .map((cart) => {
           return `
             <div id='item' class="item">
                  <div class="infor">
                    <img src=${cart.image.desktop} alt="" />
                    <div class="num-infor">
                      <span class="name">${cart.name}</span>
                      <div class="count-price">
                        <span class="count">${cart.num}x</span
                        ><span class="price">@ $${cart.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div class="price-item">$${(cart.price * cart.num).toFixed(
                    2
                  )}</div>
                </div>
        `;
         })
         .join("")}
    
`;
  checkoutTotal.innerHTML = `
      <span>Order total</span>
        <span class="total-price">$${carts.reduce(
          (total, item) => item.price * item.num + total,
          0
        )}</span>
`;
};
renderCheckoutCart(carts);
export { renderCheckoutCart };
