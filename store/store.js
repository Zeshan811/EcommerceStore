
let products = JSON.parse(localStorage.getItem('products')) || [];
let cart = [];

const productsDiv = document.getElementById("products");
const cartItems = document.getElementById("cartItems");
const checkoutBtn = document.getElementById("checkout");

function renderProducts() {

    productsDiv.innerHTML = "";

    products.forEach((product, index) => {

        const disabled = product.stock === 0 ? "disabled" : "";
        const text = product.stock === 0 ? "Out of Stock" : "Add to Cart";

        productsDiv.innerHTML += `
        <div class="card">

        <img src="${product.image}">

        <h3>${product.name}</h3>

        <p>Category: ${product.category}</p>

        <p>Price: $${product.price}</p>

        <p>Stock: ${product.stock}</p>

        <button ${disabled} onclick="addToCart(${index})">${text}</button>

        </div>
        `;
    });

}

function renderCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        let itemTotal = item.price * item.qty;
        total += itemTotal;

        cartItems.innerHTML += `
        <li>
        ${item.name} (x${item.qty}) - $${itemTotal}
        </li>
        `;
    });

    cartItems.innerHTML += `<li style="font-weight:bold;margin-top:10px;">Total: $${total}</li>`;
}

function addToCart(index) {

    if (products[index].stock <= 0) return;

    let product = products[index];

    let existing = cart.find(item => item.name === product.name);

    if (existing) {

        existing.qty += 1;

    } else {

        cart.push({
            name: product.name,
            price: product.price,
            qty: 1
        });

    }

    products[index].stock -= 1;

    localStorage.setItem("products", JSON.stringify(products));

    renderProducts();
    renderCart();
}

checkoutBtn.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    alert("Order placed successfully!");

    cart = [];

    renderCart();
});

renderProducts();
renderCart();