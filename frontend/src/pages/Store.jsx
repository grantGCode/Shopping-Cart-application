import Navbar from '../components/NavBar.js'
import {products, getProductData} from '../productStore.js'
import {Row, Col} from 'react-bootstrap'


function store() {
  return (
    <div>
      <Navbar />
      <h2>store.js</h2>
      <Row>
        <Col>
          <p>{products.map((products, index) => (
            <li className='products' key={index}>{products.title}{` $${products.price}`}</li>
          ))}</p>
          </Col>
      </Row>
    </div>
  )
}

export default store
