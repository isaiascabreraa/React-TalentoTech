
import {useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { category } = useParams();

    useEffect( () => {

        fetch('/data/products.json')
        .then((res) => {
            if(!res.ok){
                throw new Error("Hubo un problema al buscar productos")
            }
            return res.json();
        })
        .then((data) => {
            if(category) {
                const filteredProducts = data.filter(prod => 
                    prod.category.toLowerCase().includes(category.toLowerCase().trim())
                );
                setProducts(filteredProducts);
            } else {
                setProducts(data);
            }

        })
        .catch((err) => {
            console.log(err)
        });

    }, [category])

    return(
        <section className='item-container'>
            <ItemList list={products}/>
        </section>
    )
}