import Navbar from '../components/NavBar.js'
import {products, getProductData} from '../productStore.js'
import {Row, Col} from 'react-bootstrap'
// import Col from 'react-bootstrap/Col'


function store() {
  return (
    <div>
      <Navbar />
      <h2>store.js</h2>
        <Row style={{display: 'block', backgroundColor: 'lightBlue'}}>
          <Col class="font-weight-bold">{products.map((products, index) => (
              <li className='products' key={index}>{products.title}{` $${products.price}`}</li>))}
          </Col>
        </Row>
    </div>
  )
}

export default store
