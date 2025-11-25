
import { Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'


export default function PageRoutes() {

    return (
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
        </Routes>
    )
}