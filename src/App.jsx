
import Header from './components/Header';
import Products from './components/Products';
import { useFilters } from './hooks/useFilters';
import {products as initalProducts} from './mocks/products.json'
import {useState} from 'react'

function App() {
  const [products, setProducts] = useState(initalProducts);

  const {filterProducts} = useFilters()
 
  const productsFiltered = filterProducts(products)

  return (
    <>
      <Header/>
      <Products products={productsFiltered}/>
    </> )
}

export default App
