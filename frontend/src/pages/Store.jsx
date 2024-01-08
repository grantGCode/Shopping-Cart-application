import Navbar from '../components/NavBar.js'
import {products, getProductData} from '../productStore.js'


function store() {
  return (
    <div>
      <Navbar />
      <h2>store.js</h2>
      <p>{products.map((products, index) => (
        <li className='products' key={index}>{products.title}{` $${products.price}`}</li>
      ))}</p>

    </div>
  )
}

export default store
