import { createContext, useState } from "react";
import { getProductData, PRODUCTS } from "./productsArr";

export const cartcontext = createContext({
    items: [],
    getProductQuantity: () => {},
    //dont define functions in context, define it later
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}

});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    // { id: 1, quantity: 2 }\
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        //question mark only returns quantity if defined
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 0) {
            //product does not exist in cart
            setCartProducts(
                [
                    ...cartProducts,
                    //add new element into cart
                    {
                        id: id,
                        quantity: 1,
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id //if equal to id, add one, if not, skip
                    ? { ...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }


    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }
    
    const contextvalue = {
        items: cartProducts,
        getProductQuantity: () => {},
        addOneToCart: () => {},
        removeOneFromCart: () => {},
        deleteFromCart: () => {},
        getTotalCost: () => {}    
    }

    return (
        <cartcontext.Provider value={contextvalue}>
            {children}
        </cartcontext.Provider>
    )
}

