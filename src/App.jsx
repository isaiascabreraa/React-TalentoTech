
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes/PagesRoutes'
import { Nav } from './components/Nav/Nav'
import { Footer } from './components/Footer/Footer'
import { CartProvider } from './context/CartContext/CartProvider'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <PageRoutes />
        <Footer />
      </CartProvider> 
    </BrowserRouter>
  )
}

export default App
