import { Card, Button, Form, Row, Col, Image} from 'react-bootstrap';
import { ShoppingCartContext } from '../CartContext.js'
import { useContext } from 'react';


function ProductCard({products}) {
  const cart = useContext(ShoppingCartContext);

  return (
    <Form>
     <Card>
      <Card.Body class='px-0 my=5'>
        <Row 
          className='d-flex justify-content-between align-items-center'
        >
          <Col>
            <h1>{products.title}</h1>
          </Col>
          <Col xs={6} md={6}>
            <Image 
              src='/images/imageShrit.jpg'
              alt='image unavalible'
              className='img-thumbnail'
            />
          </Col>    
        </Row>
        <Row className='d-flex justify-content-between align-items-center'>  
          <Col class='d-flex justify-content-Start'>
            <Image 
              src='/images/imageShritTwo.jpg'
              alt='image unavalible'
              className='img-thumbnail '
            />
          </Col>
          <Col class='d-flex justify-content-End'>
              <Col>
                <h1>{`$${products.price}`}</h1>    
              </Col>
              <Col  className='my-5'>
                <Button
                  variant="secondary" 
                  size="lg" 
                  onClick={() => {cart.addOneToCart(products)}}
                >
                  + Add To Cart
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary" 
                  size="lg"
                  onClick={() => {cart.removeOneItem(products)}}
                >
                  - Remove From Cart
                </Button>
              </Col>
            </Col>                            
          </Row>
        </Card.Body>
      </Card>
    </Form>
  )
}

export default ProductCard
