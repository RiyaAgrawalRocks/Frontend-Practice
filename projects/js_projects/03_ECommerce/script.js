document.addEventListener("DOMContentLoaded", () => {
  // console.log("JS Connected");

  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.99 },
  ];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  // load from local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // calculating total price of stored items
  let totalPrice = 0;
  if (!cart) totalPrice = 0;
  else {
    cart.forEach((item) => {
      totalPrice += parseFloat(item.price.toFixed(2));
    });
  }

  renderCart();

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${parseFloat(product.price.toFixed(2))}</span>
    <button data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    totalPrice += product.price;
    cart.push(product);

    // Save to local Storage
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
        <span>${item.name} - $${parseFloat(item.price.toFixed(2))}</span>
        <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        // cartItem.setAttribute('data-id', `${item.id}`)

        cartItem.addEventListener("click", (e) => removeItem(e.target));

        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `$${parseFloat(totalPrice.toFixed(2))}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout successfully done");

    // Save to local Storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // renderCart();
  });

  function removeItem(target) {
    // if button wasn't clicked
    if (target.tagName !== "BUTTON") return;

    // Get product id and find product
    const id = parseInt(target.getAttribute("data-id"));
    const product = products.find((p) => p.id === id);

    // Update the value of totalPrice and display it
    totalPrice -= parseFloat(product.price.toFixed(2));
    totalPriceDisplay.innerHTML = `
    $${parseFloat(totalPrice.toFixed(2))}
    `;

    // hide the cart item and remove it from cart
    target.closest("div").remove();
    let deleted = false;
    let newCart = [];
    cart.forEach((cartItem) => {
      if (!deleted && cartItem.id === id) {
        deleted = true;
      } else {
        newCart.push(cartItem);
      }
    });

    // Display the updated cart
    cart = newCart;

    // Save to local Storage
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
  }
});
