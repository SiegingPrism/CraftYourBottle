const sidebarHTML = `
<div id="sidebarOverlay" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 hidden transition-opacity" onclick="toggleSidebar()">
    <div id="sidebarMenu" class="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl transform -translate-x-full transition-transform duration-300 ease-in-out" onclick="event.stopPropagation()">
        <div class="p-6 border-b border-slate-100 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-wine-bottle text-slate-700 text-xl"></i>
                <span class="font-bold text-xl text-slate-800">CraftYourBottle</span>
            </div>
            <button onclick="toggleSidebar()" class="text-slate-400 hover:text-slate-600">
                <i class="fa-solid fa-xmark text-xl"></i>
            </button>
        </div>

        <nav class="p-6 overflow-y-auto h-[calc(100%-80px)]">
            <p class="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Shop</p>
            <div class="space-y-1 mb-6">
                <a href="bottlecraft.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-house w-5 text-center"></i> <span class="font-semibold text-sm">Home Catalog</span>
                </a>
                <a href="product-detail.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-magnifying-glass w-5 text-center"></i> <span class="font-semibold text-sm">Product Detail</span>
                </a>
                <a href="about.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-leaf w-5 text-center"></i> <span class="font-semibold text-sm">Our Story</span>
                </a>
            </div>

            <p class="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Discover</p>
            <div class="space-y-1 mb-6">
                <a href="premium-quality.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-wand-magic-sparkles w-5 text-center"></i> <span class="font-semibold text-sm">Signature Series</span>
                </a>
                <a href="custom-designs.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-pen-nib w-5 text-center"></i> <span class="font-semibold text-sm">Custom Studio</span>
                </a>
                <a href="stickers.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-tag w-5 text-center"></i> <span class="font-semibold text-sm">Sticker Lab</span>
                </a>
                <a href="premium-materials.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-layer-group w-5 text-center"></i> <span class="font-semibold text-sm">Materials</span>
                </a>
            </div>

            <p class="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Customer Area</p>
            <div class="space-y-1 mb-6">
                <a href="favorites.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-heart w-5 text-center"></i> <span class="font-semibold text-sm">My Wishlist</span>
                </a>
                <a href="cart.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-cart-shopping w-5 text-center"></i> <span class="font-semibold text-sm">My Cart</span>
                </a>
                <a href="track-order.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-truck-fast w-5 text-center"></i> <span class="font-semibold text-sm">Track Order</span>
                </a>
                <a href="profile.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-user w-5 text-center"></i> <span class="font-semibold text-sm">My Account</span>
                </a>
            </div>

            <p class="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Internal</p>
            <div class="space-y-1">
                <a href="login.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-lock w-5 text-center"></i> <span class="font-semibold text-sm">Login / Signup</span>
                </a>
                <a href="admin-products.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-user-shield w-5 text-center"></i> <span class="font-semibold text-sm">Admin Dashboard</span>
                </a>
                <a href="sell.html" class="flex items-center gap-4 p-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-[#1e3a8a] transition-all">
                    <i class="fa-solid fa-handshake w-5 text-center"></i> <span class="font-semibold text-sm">Sell With Us</span>
                </a>
            </div>
        </nav>
    </div>
</div>
`;

// Inject Sidebar into Body
document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

// Sidebar Functions    
function toggleSidebar() {
    const overlay = document.getElementById('sidebarOverlay');
    const menu = document.getElementById('sidebarMenu');

    if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
        setTimeout(() => menu.classList.remove('-translate-x-full'), 10);
    } else {
        menu.classList.add('-translate-x-full');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}









