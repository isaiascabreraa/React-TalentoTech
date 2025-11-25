
export const Item = ({name, price, description, imageUrl, children}) => {
    
    return(
        <article className="">
            <img src={imageUrl} alt={description}></img>
            <h2 className="">{name}</h2>
            <p>Precio: {price}</p>
            {children}
        </article>
    )
}