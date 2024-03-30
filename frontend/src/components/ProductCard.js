import { Card, Button, Form, Row, Col, Image} from 'react-bootstrap';
import { ShoppingCartContext } from '../CartContext.js'
import { useContext } from 'react';


function ProductCard({products}) {
  const cartContext = useContext(ShoppingCartContext);

  return (
    <Form>
      <Card>
        <Card.Body className='px-0 my=5'>
          <Row 
            className='d-flex justify-content-between align-items-center'
          >
            <Col>
              <h1>{products.title}</h1>
            </Col>
            <Col xs={6} md={6}>
              <Image 
                src='/images/imageShrit.jpg'
                alt='image unavailable'
                className='img-thumbnail'
              />
            </Col>    
          </Row>
          <Row className='d-flex justify-content-between align-items-center'>  
            <Col className='d-flex justify-content-Start'>
              <Image 
                src='/images/imageShritTwo.jpg'
                alt='image unavailable'
                className='img-thumbnail '
              />
            </Col>
            <Col className='d-flex justify-content-End'>
              <Col>
                <Col>
                  <h1>{`$${products.cost}`}</h1>    
                </Col>
                <Col  className='my-5'>
                  <Button
                    variant="secondary" 
                    size="lg" 
                    onClick={() => {cartContext.addOneToCart(products)}}
                  >
                    + Add To Cart
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="secondary" 
                    size="lg"
                    onClick={() => {cartContext.removeOneItem(products)}}
                  >
                    - Remove From Cart
                  </Button>
                </Col>  
              </Col>
            </Col>                            
          </Row>
        </Card.Body>
      </Card>
    </Form>
  )
}

export default ProductCard
