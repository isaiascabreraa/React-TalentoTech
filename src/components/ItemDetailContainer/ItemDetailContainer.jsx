import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch('/data/products')
        .then((res) => {
            if (!res.ok){
                throw new Error("No se encontró el producto")
            }
            return res.json()
        })
        .then((data) => {
            const found = data.find(prod => prod.id === id)
            if (found){
                setDetail(found)
            } else {
                throw new Error("Producto no encontrado");
            }

        })
        .catch((err) => {
            console.log(err)
        })

    }, [id])

    return(
        <div>
            {Object.keys(detail).length ? (
                <ItemDetail {...detail}/>
            ) : (
                <p> Cargando ... </p>
            )}
        </div>
    )

}