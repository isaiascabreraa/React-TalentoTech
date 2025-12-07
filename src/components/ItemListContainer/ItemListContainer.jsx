
import './ItemListContainer.css'
import {useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/products';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { category } = useParams();

    useEffect( () => {
        getProducts(category)
        .then( (items) => {
            setProducts(items)
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