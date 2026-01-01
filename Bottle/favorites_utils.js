const FAVORITES_KEY = 'bottle_favorites';

/**
 * Get favorites from localStorage
 * @returns {Array} Array of favorite product objects
 */
function getFavorites() {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
}

/**
 * Save favorites to localStorage
 * @param {Array} favorites Array of product objects
 */
function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    updateFavoritesUI(); // Optional: if we had a badge
}

/**
 * Add a product to favorites
 * @param {Object} product Product object to add
 */
function addToFavorites(product) {
    const favorites = getFavorites();
    const existingIndex = favorites.findIndex(item => item.id === product.id);

    if (existingIndex === -1) {
        favorites.push(product);
        saveFavorites(favorites);
        showToast(`Added ${product.name} to favorites`);
    } else {
        showToast(`${product.name} is already in favorites`);
    }
}

/**
 * Remove a product from favorites
 * @param {string} productId ID of the product to remove
 */
function removeFromFavorites(productId) {
    const favorites = getFavorites();
    const newFavorites = favorites.filter(item => item.id !== productId);
    saveFavorites(newFavorites);
    // If we are on the favorites page, we might want to re-render
    if (typeof renderFavorites === 'function') {
        renderFavorites();
    }
}

/**
 * Check if a product is in favorites
 * @param {string} productId 
 * @returns {boolean}
 */
function isFavorite(productId) {
    const favorites = getFavorites();
    return favorites.some(item => item.id === productId);
}

/**
 * Toggle favorite status
 * @param {Object} product 
 */
function toggleFavorite(product) {
    if (isFavorite(product.id)) {
        removeFromFavorites(product.id);
        showToast(`Removed ${product.name} from favorites`);
    } else {
        addToFavorites(product);
    }
}

// Re-use the existing toast function from cart_utils if loaded, checking if it exists
if (typeof showToast !== 'function') {
    window.showToast = function (message) {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-xl z-50 flex items-center gap-3 animate-bounce-short text-sm font-medium';
        toast.innerHTML = `<i class="fa-solid fa-heart text-red-500"></i> ${message}`;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
    };
}
