
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes/PagesRoutes'
import { CartProvider } from './context/CartContext/CartProvider'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <PageRoutes />
      </CartProvider> 
    </BrowserRouter>
  )
}

export default App
