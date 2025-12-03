
import { Routes, Route } from 'react-router-dom'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../components/Cart/Cart'

export default function PageRoutes() {

    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/carrito' element={<Cart/>}></Route>
        </Routes>
    )
}