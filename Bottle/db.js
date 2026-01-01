// db.js
import { db, isConfigured, collection, getDocs } from "./firebase-config.js";

// --- MOCK DATA (Fallback when DB is not connected) ---
const MOCK_PRODUCTS = [
    {
        id: "1",
        name: "Standard Plastic Bottle",
        price: 799.00,
        description: "High-quality transparent plastic bottle. Perfect for branding.",
        image: "standard_plastic_bottle.png",
        rating: 4.8,
        reviews: 124,
        loading: "lazy"
    },
    {
        id: "2",
        name: "Premium Plastic Flask",
        price: 999.00,
        description: "Durable and lightweight. Ideal for bulk orders.",
        image: "premium_plastic_flask.png",
        rating: 4.9,
        reviews: 89,
        loading: "lazy"
    },
    {
        id: "3",
        name: "Eco-Friendly Bottle",
        price: 899.00,
        description: "Made from recycled plastics. Sustainable choice.",
        image: "eco_friendly_bottle.png",
        rating: 4.7,
        reviews: 215,
        loading: "lazy"
    },
    {
        id: "4",
        name: "Matte Black Gym Bottle",
        price: 1299.00,
        description: "Sleek matte finish with superior grip. 1L capacity.",
        image: "matte_black_gym_bottle.png",
        rating: 4.9,
        reviews: 340,
        loading: "lazy"
    },
    {
        id: "5",
        name: "Kids School Bottle",
        price: 699.00,
        description: "Durable, smaller size perfect for lunchboxes. Leak-proof.",
        image: "kids_school_bottle.png",
        rating: 4.6,
        reviews: 150,
        loading: "lazy"
    },
    {
        id: "6",
        name: "Infuser Water Bottle",
        price: 1199.00,
        description: "Includes fruit infuser compartment for healthy hydration.",
        image: "infuser_water_bottle.png",
        rating: 4.8,
        reviews: 210,
        loading: "lazy"
    },
    {
        id: "7",
        name: "Insulated Sports Thermos",
        price: 1499.00,
        description: "Keeps gym water cold for 24 hours. Double-wall vacuum.",
        image: "insulated_sports_thermos.png",
        rating: 5.0,
        reviews: 412,
        loading: "lazy"
    },
    {
        id: "8",
        name: "Minimalist Glass Carafe",
        price: 1599.00,
        description: "Elegant design for office or home use. Borosilicate glass look.",
        image: "minimalist_glass_carafe.png",
        rating: 4.7,
        reviews: 98,
        loading: "lazy"
    },
    {
        id: "9",
        name: "Wide Mouth Hiker",
        price: 1099.00,
        description: "Easy to fill and clean. Rugged design for outdoor trips.",
        image: "wide_mouth_hiker.png",
        rating: 4.8,
        reviews: 175,
        loading: "lazy"
    }
];

export async function getProducts() {
    if (isConfigured) {
        // REAL DB CALL
        try {
            const querySnapshot = await getDocs(collection(db, "products"));
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push({ id: doc.id, ...doc.data() });
            });
            return products;
        } catch (e) {
            console.error("Error fetching products from FireStore:", e);
            return MOCK_PRODUCTS;
        }
    } else {
        // SIMULATED LATENCY FOR MOCK MODE
        return new Promise(resolve => {
            setTimeout(() => resolve(MOCK_PRODUCTS), 800);
        });
    }
}

export function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
}
