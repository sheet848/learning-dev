import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ProductList />
      <Cart />
    </div>
    </>
  )
}

export default App
