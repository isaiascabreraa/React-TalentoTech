import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const exists = (id) => {
        const exist = cart.some(p => p.id === id)
        return exist
    };

    const addItem = (item) => {

        //console.log("Adding item to cart:", item);
        //console.log("Item quatity:", item.quantity);
        if(exists(item.id)) {
            const updatedCart = cart.map(p => {
                if(p.id === item.id){
                    return {...p, quantity: p.quantity + item.quantity};
                }
                return p;
            });
            setCart(updatedCart)

        } else {
            setCart([...cart, item])
        }
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter(p => p.id !== id);
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalPrice = () => {
        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return totalPrice  
    }
 
    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        return totalItems
    }

    const checkout = () => {
        const ok = confirm("Desea finalizar la compra?");
        if(ok){
            clearCart();
        }
    }

    const values = { cart, addItem, deleteItem, clearCart, getTotalItems, getTotalPrice, checkout}

    return( 
        <CartContext.Provider value={{values}} >
            {children}
        </CartContext.Provider>
    )
}