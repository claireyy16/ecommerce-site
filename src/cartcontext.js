import { createContext, useState } from "react";
import { getProductData } from "./productsArr";

// Define the context with a default value
export const cartcontext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find((product) => product.id === id)?.quantity;
        return quantity === undefined ? 0 : quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 0) {
            setCartProducts([
                ...cartProducts,
                { id: id, quantity: 1 },
            ]);
        } else {
            setCartProducts(
                cartProducts.map((product) =>
                    product.id === id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )
            );
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map((product) =>
                    product.id === id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                )
            );
        }
    }

    function deleteFromCart(id) {
        setCartProducts((cartProducts) =>
            cartProducts.filter((currentProduct) => currentProduct.id !== id)
        );
    }

    function getTotalCost() {
        return cartProducts.reduce((totalCost, cartItem) => {
            const productData = getProductData(cartItem.id);
            return totalCost + productData.price * cartItem.quantity;
        }, 0);
    }

    const contextvalue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    };

    return (
        <cartcontext.Provider value={contextvalue}>
            {children}
        </cartcontext.Provider>
    );
}
