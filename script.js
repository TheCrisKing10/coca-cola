// Definición de los productos
const products = [
    { id: 101, name: "Coca-Cola 3L Ret (6 pack)", price: 207.00, piecesPerPackage: 6,  image: "coca-cola 3l ret.webp" },
    { id: 102, name: "Coca-Cola 2.5L Ret (8 pack)", price: 240.00, piecesPerPackage: 8,  image: "coca-cola 2.5l ret.webp" },
    { id: 103, name: "Coca-Cola 1.25L Ret (8 pack)", price: 140.00, piecesPerPackage: 8,  image: "coca-cola 1.25l ret.webp" },
    { id: 104, name: "Coca-Cola 500ml Ret (24 pack)", price: 318.00, piecesPerPackage: 24,  image: "coca-cola 500ml.webp" },
    { id: 105, name: "Valle Frut 2.5L Ret (8 pack)", price: 224.00, piecesPerPackage: 8,  image: "valle frut 2.5l ret.webp" },
    { id: 106, name: "Coca-Cola 3L (4 pack)", price: 156.00, piecesPerPackage: 4, image: "coca-cola 3l.webp" },
    { id: 107, name: "Coca-Cola 1.75L (8 pack)", price: 255.00, piecesPerPackage: 8, image: "coca-cola 1.75l.webp" },
    { id: 108, name: "Coca-Cola 1.35L (6 pack)", price: 164.00, piecesPerPackage: 6, image: "coca-cola 1.35l.webp" },
    { id: 109, name: "Coca-Cola 600ml (24 pack)", price: 424.00, piecesPerPackage: 24, image: "coca-cola 600ml.webp" },
    { id: 110, name: "Coca-Cola 400ml (12 pack)", price: 159.00, piecesPerPackage: 12, image: "coca-cola 400ml.webp" },
    { id: 111, name: "Coca-Cola 355ml Choby (12 pack)", price: 126.00, piecesPerPackage: 12, image: "coca-cola 355ml choby.webp" },
    { id: 112, name: "Coca-Cola 250ml (12 pack)", price: 127.00, piecesPerPackage: 12, image: "coca-cola 250ml.webp" },
    { id: 113, name: "Coca-Cola 355ml Lata (12 pack)", price: 212.00, piecesPerPackage: 12, image: "coca-cola 355ml lata.webp" },
    { id: 114, name: "Coca-Cola 3L Zero (4 pack)", price: 149.00, piecesPerPackage: 4, image: "coca-cola 3l zero.webp" },
    { id: 115, name: "Coca-Cola 600ml Zero (12 pack)", price: 159.00, piecesPerPackage: 12, image: "coca-cola 600ml zero.webp" },
    { id: 116, name: "Coca-Cola 355ml Zero Choby (12 pack)", price: 78.00, piecesPerPackage: 12, image: "coca-cola 355ml choby zero.webp" },
    { id: 117, name: "Fanta 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "fanta 3l.webp" },
    { id: 118, name: "Fresca 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "fresca 3l.webp" },
    { id: 119, name: "Sidral Mundet 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "sidral mundet 3l.webp" },
    { id: 120, name: "Sprite 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "sprite 3l.webp" },
    { id: 121, name: "Valle Frut 3L (4 pack)", price: 137.00, piecesPerPackage: 4, image: "valle frut 3l.webp" },
    { id: 122, name: "Delaware Punch 2L (4 pack)", price: 88.00, piecesPerPackage: 4, image: "delaware 2l.webp" },
    { id: 123, name: "Mundet Ameyal 2L (4 pack)", price: 87.50, piecesPerPackage: 4, image: "sidral ameyal 2l.webp" },
    { id: 124, name: "Mundet Manzana 2L  (4 pack)", price: 87.50, piecesPerPackage: 4, image: "sidral manzana 2l.webp" },
    { id: 125, name: "Predator Gold Strike 473ml (6 pack)", price: 100.00, piecesPerPackage: 6, image: "predator energy 473ml.webp" },
    { id: 126, name: "Predator Purple Rain 473ml (6 pack)", price: 100.00, piecesPerPackage: 6, image: "predator energy purple 473ml.webp" },
    { id: 127, name: "Monster Green 473ml (4 pack)", price: 124.00, piecesPerPackage: 4, image: "monster energy zero 473ml.webp" },
    { id: 128, name: "Monster White 473ml (4 pack)", price: 124.00, piecesPerPackage: 4, image: "monster energy zero ultra 473ml.webp" },
    { id: 129, name: "Santa Clara Entera 1L (6 pack)", price: 159.00, piecesPerPackage: 6, image: "santa clara entera 1l.webp" },
    { id: 130, name: "Santa Clara Deslactosada 1L (6 pack)", price: 147.00, piecesPerPackage: 6, image: "santa clara deslactosada 1l.webp" },
    { id: 131, name: "Santa Clara Fresa 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "santa clara fresa 180ml.webp" },
    { id: 132, name: "Santa Clara Vainilla 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "santa clara vainilla 180ml.webp" },
    { id: 133, name: "Santa Clara Chocolate 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "santa clara chocolate 180ml.webp" },
    { id: 134, name: "Santa Clara Capuccino 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "santa clara capuccino 180ml.webp" },
    { id: 135, name: "Tubi-Papa Original (10 pack)", price: 160.50, piecesPerPackage: 10, image: "papa sol original.webp" },
    { id: 136, name: "Tubi-Papa Enchilado (10 pack)", price: 166.50, piecesPerPackage: 10, image: "papa sol enchilado.webp" },
    { id: 137, name: "Tubi-Papa No Enchilado (10 pack)", price: 166.50, piecesPerPackage: 10, image: "papa sol no enchilado.webp" },
    { id: 138, name: "Isadora Refritos Bayos 430g", price: 15.50, piecesPerPackage: 1, image: "isadora frijoles refritos bayos.webp" },
    { id: 139, name: "Isadora Refritos Negros 430g", price: 15.50, piecesPerPackage: 1, image: "isadora frijoles refritos negros.webp" },
    { id: 140, name: "Isadora Refritos Peruanos 430g", price: 15.50, piecesPerPackage: 1, image: "isadora frijoles refritos peruanos.webp" },
];

let cart = [];

const productsContainer = document.getElementById('products');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const searchInput = document.getElementById('search-input');
const checkoutBtn = document.getElementById('checkout-btn');

// Función para formatear números con separador de miles y dos decimales
function formatPrice(number) {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    renderCart();
});

// Renderiza la lista de productos
function renderProducts(filteredProducts) {
    productsContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        const pricePerPiece = product.price / product.piecesPerPackage;
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="imagenes/${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${formatPrice(product.price)}</p>
                ${product.piecesPerPackage > 1 ? `<p class="price-per-piece">$${formatPrice(pricePerPiece)} / pieza</p>` : ''}
                <div class="quantity-control-product" data-id="${product.id}">
                    <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                    <span class="quantity" data-id="${product.id}">${quantity}</span>
                    <button class="quantity-btn increase" data-id="${product.id}">+</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Renderiza los items del carrito
function renderCart() {
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;

    // Ordena el carrito por ID de forma ascendente
    const sortedCart = cart.sort((a, b) => a.id - b.id);

    if (sortedCart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">Tu carrito está vacío.</p>';
        subtotalElement.textContent = '$0,00';
        totalElement.textContent = '$0,00';
        return;
    }

    sortedCart.forEach(item => {
        const pricePerPiece = item.price / item.piecesPerPackage;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="imagenes/${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <span class="cart-item-name">${item.name}</span>
                <p class="cart-item-price">$${formatPrice(item.price * item.quantity)}</p>
                ${item.piecesPerPackage > 1 ? `<p class="cart-item-per-piece">$${formatPrice(pricePerPiece)} / pieza</p>` : ''}
            </div>
            <div class="quantity-control">
                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.id}">+</button>
            </div>
            <button class="remove-item-btn" data-id="${item.id}">X</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        subtotal += item.price * item.quantity;
    });

    // Actualiza los totales en tiempo real
    subtotalElement.textContent = `$${formatPrice(subtotal)}`;
    totalElement.textContent = `$${formatPrice(subtotal)}`;
}

// Lógica del carrito de compras
function handleCart(event) {
    const target = event.target;
    const id = parseInt(target.dataset.id);

    if (!id) return;

    const product = products.find(p => p.id === id);
    let cartItem = cart.find(item => item.id === id);

    if (target.classList.contains('increase')) {
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    } else if (target.classList.contains('decrease')) {
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity--;
        } else if (cartItem && cartItem.quantity === 1) {
            cart = cart.filter(item => item.id !== id);
        }
    } else if (target.classList.contains('remove-item-btn')) {
        cart = cart.filter(item => item.id !== id);
    }
    
    // Actualiza la visualización de ambos, productos y carrito
    renderProducts(products); 
    renderCart();
}

// Lógica del buscador
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
}

// Lógica de generación y descarga del ticket
function generateTicket() {
    if (cart.length === 0) {
        alert("El carrito está vacío. Agrega productos para generar un ticket.");
        return;
    }

    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket-style');
    ticketContainer.style.width = '400px'; /* 300px ES EL PREDETERMINADO */
    ticketContainer.style.padding = '1rem';
    ticketContainer.style.fontFamily = 'monospace';
    ticketContainer.style.backgroundColor = '#fff';
    ticketContainer.style.color = '#000';
    ticketContainer.style.border = '2px dashed #000';
    ticketContainer.style.margin = '20px auto';
    ticketContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';

    // Ordena el carrito por ID de forma ascendente para el ticket
    const sortedCartForTicket = cart.sort((a, b) => a.id - b.id);
    
    let ticketContent = `
        <h2 style="text-align: center; margin-bottom: 1rem; text-transform: uppercase; font-size: 1.2rem;">Pedido Coca-Cola</h2>
        <p style="text-align: center; font-size: 0.8rem; margin-bottom: 1rem;">Ticket de Compra</p>
        <div style="border-top: 1px dashed #000; padding-top: 1rem;">
            ${sortedCartForTicket.map(item => `
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                    <img src="imagenes/${item.image}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">
                    <div style="flex-grow: 1;">
                        <p style="font-weight: bold; margin: 0;">${item.name}</p>
                        <p style="margin: 0; font-size: 0.9rem;">Cantidad: ${item.quantity} x $${formatPrice(item.price)}</p>
                    </div>
                    <p style="font-weight: bold; margin: 0;">$${formatPrice(item.price * item.quantity)}</p>
                </div>
            `).join('')}
        </div>
        <div style="border-top: 1px dashed #000; margin-top: 1rem; padding-top: 1rem;">
            <p style="display: flex; justify-content: space-between; font-weight: bold;"><span>Subtotal:</span><span>${subtotalElement.textContent}</span></p>
            <p style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.2rem;"><span>Total:</span><span>${totalElement.textContent}</span></p>
        </div>
        <p style="text-align: center; margin-top: 1rem; font-size: 0.8rem;">¡Gracias por tu compra!</p>
    `;
    ticketContainer.innerHTML = ticketContent;
    document.body.appendChild(ticketContainer);

    html2canvas(ticketContainer, { scale: 2 }).then(canvas => {
        const image = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.href = image;
        link.download = 'ticket_de_compra.png';
        link.click();
        document.body.removeChild(ticketContainer);
    });
}

// Event Listeners
productsContainer.addEventListener('click', handleCart);
cartItemsContainer.addEventListener('click', handleCart);
searchInput.addEventListener('input', filterProducts);
checkoutBtn.addEventListener('click', generateTicket);
