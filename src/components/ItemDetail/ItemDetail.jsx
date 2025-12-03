
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import { Count } from "../Count/Count";

export const ItemDetail = ({ detail }) => {

    const { values } = useCartContext(); 
    const { addItem } = values;

    const handleAddItem = (quantity) => {
        addItem({ ...detail, quantity })
    }

    return(
        <Item {...detail}>
            <Count btnText={"Agregar al carrito"} onConfirm={handleAddItem}/>
        </Item>
    )
}