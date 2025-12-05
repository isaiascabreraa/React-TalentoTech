
import { Routes, Route } from 'react-router-dom'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../components/Cart/Cart'
import { ProductFormContainer } from '../components/adminComponents/ProductFormContainer/ProductFormContainer'
import { MainLayout } from '../layout/MainLayout'
import { AdminLayout } from '../layout/AdminLayout'
import { Login } from '../components/Login/Login'

export default function PageRoutes() {

    return (
        <Routes>

            <Route element={<MainLayout />}>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
                <Route path='/category/:category' element={<ItemListContainer />}></Route>
                <Route path='/carrito' element={<Cart/>}></Route>
            </Route>

            <Route path='/admin' element={<AdminLayout />}>
                <Route index element={<Login />}></Route>
                <Route path='alta-productos' element={
                        <RutaProtegida>
                            <ProductFormContainer/>
                        </RutaProtegida>}>
                </Route>
            </Route>

        </Routes>
    )
}