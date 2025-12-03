
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/useCartContext';
import { Item } from '../Item/Item';    


export const Cart = () => { 

    const { values } = useCartContext();
    const { cart, deleteItem, clearCart, getTotalPrice, checkout } = values;


    return(
        <section>
            <h2>Carrito de compras</h2>

            { cart.length === 0 ? (<p>El carrito está vacío</p>) 
            : ( cart.map( prod => 
                <Item key={prod.id} {...prod}> 
                    <div>
                        <p style={{color: "black"}}>Cantidad: {prod.quantity}</p>
                        <button onClick={() => deleteItem(prod.id)}>Eliminar producto</button> 
                    </div>
                </Item>
            ))
            }

            { cart.length === 0 ? (
                <Link to="/"> Volver al inicio </Link>
            ) : (<div>
                    <div>
                        <p>Total a pagar: ${getTotalPrice()}</p>
                    </div>
                    <button onClick={checkout}>Finalizar Compra</button>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>)}
        </section>
    )
}