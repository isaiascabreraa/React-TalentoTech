
export const Item = ({name, price, description, imageUrl, children}) => {
    
    return(
        <article className="item">
            <img className='item-img' src={imageUrl} alt={description}></img>
            <h2 className="item-title">{name}</h2>
            <p className="item-price">Precio: {price}</p>
            {children}
        </article>
    )
}