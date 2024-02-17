import './App.css'
import {products as initalProducts} from './mocks/products.json'
import {useState} from 'react'

function App() {
  const [products, setProducts] = useState(initalProducts);
  
  const filters = {
    category:"laptops",
    min_price:0,
    max_price:0,
  }

  let productsFiltered = products.filter( (product) => { 
    if (product.category==filters.category) {
    return product}})

  console.log(productsFiltered)

  console.log(products)

  return (
    <>
      <main className="w-1/2 h-screen grid grid-cols-3 gap-10">
        {
        products.slice(0,10).map(product => 
          <div  key={product.id} className="card bg-zinc-900 w-100 h-100 text-white flex flex-col p-5 gap-2">
            <img src={product.thumbnail} alt={"Image of a " + product.title} />
            <h1>{product.title}</h1>
            <span className="self-end">{product.price + "$"}</span>
          </div>
        )
        }

      </main>
    </>
  )
}

export default App
