
import { Link } from 'react-router-dom'
import { Item } from '../Item/Item'

export const ItemList = ({ list }) => {
    
    return(
        <>
            {list.length > 0 ? 
                list.map((prod) => {
                    return (<Link key={prod.id} to={`/detail/${prod.id}`}>
                                <Item {...prod}/>
                            </Link>)
                    }
                )
            : <p>No hay productos disponibles</p>}
        </>
    )
}