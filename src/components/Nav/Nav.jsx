import { Link } from 'react-router-dom'
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
                    <Link to={'/'}>Carrito</Link>
                    {total > 0 && (<span className=''>{total}</span>)}
                </li>
            </ul>
        </nav>
    )
}