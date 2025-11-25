import { useContext } from "react"
import { CartContext } from "./CardContext"

export const useCartContext = () => {
    return useContext(CartContext)
}