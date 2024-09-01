document.addEventListener("DOMContentLoaded", function() {
    renderCart(); // Renderizar o carrinho ao carregar a página
});

// Função para adicionar um item ao carrinho
function addToCart(itemName, itemPrice) {
    const cartItem = {
        name: itemName,
        price: parseFloat(itemPrice)
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // Renderizar o carrinho após adicionar um item
}

// Função para remover um item do carrinho
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // Renderizar o carrinho após remover um item
}

// Função para renderizar o carrinho na página HTML
function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary');
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="example.jpg" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Preço: R$${item.price.toFixed(2)}</p>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remover</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });
    cartSummary.innerHTML = `<h2>Resumo do Carrinho</h2><p id="total">Total: R$${total.toFixed(2)}</p>`;
}