
export const ItemList = ({list}) => {
    
    return(
        <>
            {list.lenght ? 
                list.map((prod) => {
                    <Link key={prod.id} to={`/detail/${prod.id}`}>
                        <Item {...prod}/>
                    </Link>
                }) 
            : <p>No hay productos disponibles</p>}
        </>
    )
}