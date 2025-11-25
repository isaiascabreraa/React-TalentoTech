import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/useCardContext'

export const Nav = () => {

    const { getTotalItems } = useCartContext();
    
    return(
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/'}>Carrito</Link>
                    {getTotalItems() > 0 && (<span className=''>{getTotalItems()}</span>)}
                </li>
            </ul>
        </nav>
    )
}