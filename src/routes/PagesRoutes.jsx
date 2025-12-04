
import { Routes, Route } from 'react-router-dom'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../components/Cart/Cart'
import { ProductFormContainer } from '../components/adminComponents/ProductFormContainer/ProductFormContainer'

export default function PageRoutes() {

    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/category/:category' element={<ItemListContainer />}></Route>
            <Route path='/carrito' element={<Cart/>}></Route>
            <Route path='/admin' element={<ProductFormContainer />}></Route>
        </Routes>
    )
}