
import './Nav.css'
import { Link } from 'react-router-dom'
import Category from "../Category/Category";
import { useCartContext } from '../../context/CartContext/useCartContext'

export const Nav = () => {

    const { values } = useCartContext();
    const total = values.getTotalItems();
    
    return(
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Category />
                </li>
                <li>
                    <Link to={'/carrito'}>Carrito</Link>
                    {total > 0 && (<span className='quantity-products'>{total}</span>)}
                </li>
            </ul>
        </nav>
    )
}