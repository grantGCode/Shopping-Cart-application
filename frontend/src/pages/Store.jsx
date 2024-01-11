import Navbar from '../components/NavBar.js'
import products from '../productStore.js'
import getProductData from '../productStore.js'

function store() {
  return (
    <div>
      <h1>store.js</h1>
      {/* <h3>{products}</h3> */}
      <Navbar />
    </div>
  )
}

export default store
