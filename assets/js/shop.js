// Shopping Cart Logic
const shoppingCart = (() => {
    let cart = [];

    // Item constructor
    class Item {
        constructor(name, price, count) {
            this.name = name;
            this.price = price;
            this.count = count;
        }
    }

    // Save cart to sessionStorage
    function saveCart() {
        sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    // Load cart from sessionStorage
    function loadCart() {
        const storedCart = sessionStorage.getItem("shoppingCart");
        cart = storedCart ? JSON.parse(storedCart) : [];
    }

    loadCart();

    // Public methods
    return {
        addItem(name, price, count) {
            const item = cart.find((item) => item.name === name);
            if (item) {
                item.count += count;
            } else {
                cart.push(new Item(name, price, count));
            }
            saveCart();
        },
        removeItem(name) {
            const item = cart.find((item) => item.name === name);
            if (item) {
                item.count--;
                if (item.count === 0) cart = cart.filter((item) => item.name !== name);
            }
            saveCart();
        },
        deleteItem(name) {
            cart = cart.filter((item) => item.name !== name);
            saveCart();
        },
        clearCart() {
            cart = [];
            saveCart();
        },
        listCart() {
            return cart.map((item) => ({
                ...item,
                total: (item.price * item.count).toFixed(2),
            }));
        },
        totalCount() {
            return cart.reduce((total, item) => total + item.count, 0);
        },
        totalCart() {
            return cart.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
        },
    };
})();

// UI Logic
function displayCart() {
    const cartArray = shoppingCart.listCart();
    const cartTableBody = document.querySelector(".show-cart tbody");
    const totalCart = document.querySelector(".total-cart");
    const totalCount = document.querySelector(".total-count");

    if (cartTableBody) {
        cartTableBody.innerHTML = cartArray
            .map(
                (item) => `
        <tr>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>
                <button class="btn btn-sm btn-primary minus-item" data-name="${item.name}">-</button>
                ${item.count}
                <button class="btn btn-sm btn-primary plus-item" data-name="${item.name}" data-price="${item.price}">+</button>
            </td>
            <td>$${item.total}</td>
            <td><button class="btn btn-sm btn-danger delete-item" data-name="${item.name}">X</button></td>
        </tr>
    `
            )
            .join("");
    }

    if (totalCart) totalCart.textContent = shoppingCart.totalCart();
    if (totalCount) totalCount.textContent = shoppingCart.totalCount();
    updateCartCount();
}

// Update Navbar Cart Count
function updateCartCount() {
    const totalCount = shoppingCart.totalCount();
    const cartCountDesktop = document.getElementById("cartCount");
    const cartCountMobile = document.getElementById("cartCountMobile");

    if (cartCountDesktop) cartCountDesktop.innerText = totalCount;
    if (cartCountMobile) cartCountMobile.innerText = totalCount;
}

// Event Listeners
document.addEventListener("click", (event) => {
    if (event.target.matches(".add-to-cart")) {
        event.preventDefault();
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);
        shoppingCart.addItem(name, price, 1);
        displayCart();
    }

    if (event.target.matches(".clear-cart")) {
        shoppingCart.clearCart();
        alert("Cart cleared!");
        displayCart();
    }

    if (event.target.matches(".minus-item")) {
        const name = event.target.dataset.name;
        shoppingCart.removeItem(name);
        displayCart();
    }

    if (event.target.matches(".plus-item")) {
        const name = event.target.dataset.name;
        const price = parseFloat(event.target.dataset.price);
        shoppingCart.addItem(name, price, 1);
        displayCart();
    }

    if (event.target.matches(".delete-item")) {
        const name = event.target.dataset.name;
        shoppingCart.deleteItem(name);
        displayCart();
    }
});

// Initial display
displayCart();
