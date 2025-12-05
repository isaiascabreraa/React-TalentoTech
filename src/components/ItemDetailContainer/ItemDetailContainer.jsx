import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState({})

    useEffect(() => {
        getProductById(id)
        .then( (item) => {
            setDetail(item)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [id])

    return(
        <div>
            {detail && Object.keys(detail).length ? (
                <ItemDetail detail={detail}/>
            ) : (
                <p> Cargando ... </p>
            )}
        </div>
    )

}