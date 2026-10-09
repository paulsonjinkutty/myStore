// A hook is a React function that lets a component use React features such as state.

import { useState } from "react";
import type { Product } from "../types/Poducts.ts";

// creates and manages the cart state
export function useCart() {
    const [cart, setCart] = useState<Product[]>([]);

    function addToCart(product: Product) {
        setCart((currentCart) => [...currentCart, product]);    // updates the cart using its latest state
    }

    function clearCart() {
        setCart([]);
    }

    // reduce() processes an array to produce a single result
    const total = cart.reduce(
        (sum, product) => sum + product.price, 0);  // total price

    return {
        cart,
        addToCart,
        clearCart,
        total,
    };
}
