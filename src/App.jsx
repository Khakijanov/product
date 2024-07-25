import './App.css'
import Cart from './components/Cart'
import ProductsList from './components/ProductsList'

function App() {

  return (
    <div className='container flex gap-5 flex-col w-full  justify-between md:flex-col lg:flex-row   '>
        <ProductsList/>
        <Cart/>
    </div>
  )
}

export default App
 