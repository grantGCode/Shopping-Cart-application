import Navbar from '../components/NavBar.js'
import {products, getProductData} from '../productStore.js'
import {Row, Col, Form, Button} from 'react-bootstrap'


function store() {
  return (
    <div>
      <Navbar />
      <h2>store.js</h2>
        <Row style=
          {{
            display: 'block',
            padding:10, 
            margin:95, 
            backgroundColor: 'lightBlue'
          }}>
          {products.map((products, index) => (
            <Col 
              style={{margin:12}} 
              className='products'  
              key={index}
            >
            {products.title}{` $${products.price}`}
          </Col>
        ))}
        </Row>
        <Form>
          <h2>Form</h2>
          <Button>+ Add To Cart</Button>
          <Button>- Remove From Cart</Button>
          <Button>Remove All From Cart</Button>
        </Form>
    </div>
  )
}

export default store
