/**
 * cart_manager.js
 * Handles LocalStorage based Shopping Cart operations
 */

const CART_KEY = 'craftyourbottle_cart';

// --- Cart Data Operations ---

function getCart() {
    const cartJson = localStorage.getItem(CART_KEY);
    return cartJson ? JSON.parse(cartJson) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
    window.dispatchEvent(new Event('cartUpdated')); // Broadcast event for UI updates
}

function addToCart(product) {
    // product: { id, name, price, image, quantity, options (color, size, labelCode...) }
    const cart = getCart();

    // Check if identical item exists (same id AND same options)
    // For simplicity in this version, we might just look at ID if options aren't complex,
    // but a custom bottle needs to be treated as unique if the custom label differs.
    // simpler approach: always add custom bottles as new items, stack standard products.

    const existingItemIndex = cart.findIndex(item =>
        item.id === product.id &&
        JSON.stringify(item.options) === JSON.stringify(product.options)
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += (product.quantity || 1);
    } else {
        cart.push({ ...product, quantity: product.quantity || 1 });
    }

    saveCart(cart);

    // Visual feedback
    showToast(`Added ${product.name} to cart!`);
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

function updateQuantity(index, change) {
    const cart = getCart();
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) cart[index].quantity = 1;
        saveCart(cart);
    }
}

function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartBadge();
    window.dispatchEvent(new Event('cartUpdated'));
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// --- UI Helpers ---

function updateCartBadge() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Find all cart badges in the DOM
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        if (count > 0) {
            badge.textContent = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    });

    // Also update mobile nav if exists or others
    const badgeContainers = document.querySelectorAll('a[href="cart.html"]');
    badgeContainers.forEach(link => {
        let span = link.querySelector('span');
        if (!span && count > 0) {
            span = document.createElement('span');
            span.className = "bg-red-500 text-white text-[10px] font-bold px-1.5 rounded-full ml-1 cart-badge";
            link.appendChild(span);
        }
        if (span) {
            span.textContent = count;
            if (count === 0) span.classList.add('hidden');
            else span.classList.remove('hidden');
        }
    });
}

// Simple toast notification
function showToast(message) {
    // Check if toast container exists
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = "fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none";
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = "bg-slate-800 text-white px-4 py-3 rounded-lg shadow-lg text-sm font-medium animate-bounce-in pointer-events-auto flex items-center gap-2";
    toast.innerHTML = `<i class="fa-solid fa-check-circle text-green-400"></i> ${message}`;

    container.appendChild(toast);

    // Fade out
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
});
