import { Card, Button, Form, Row, Col, Image} from 'react-bootstrap';

import { ShoppingCartContext } from '../CartContext.js'
import { useContext } from 'react';
import { toast } from 'react-toastify';

function ProductCard({product}) {
  const cartContext = useContext(ShoppingCartContext);
  return (
    <Form>
      <Card>
        <Card.Body className='px-0 my=5'>
          <Row 
            className='d-flex justify-content-between align-items-center'
          >
            <Col>
              <h1 className='text-center'>{product.title}</h1>
            </Col>
            <Col xs={6} md={6}>
              <Image 
                src='/images/imageShrit.jpg'
                alt='image unavailable'
                className='img-thumbnail'
              />
            </Col>    
          </Row>
          <Row 
            className='d-flex justify-content-between align-items-center'
          >  
            <Col className='d-flex justify-content-Start'>
              <Image 
                src='/images/imageShritTwo.jpg'
                alt='image unavailable'
                className='img-thumbnail'
              />
            </Col>
            <Col 
              className='text-center'
            >
              <Col>
                <h1>{`$${product.cost}`}</h1>    
              </Col>
              <Col>
                <Button
                  className='my-5'
                  variant="secondary" 
                  size="lg" 
                  onClick={() => {
                    toast.info(`${product.title} added to shopping cart`);
                    cartContext.addOneToCart(product);
                  }}
                >
                  + Add To Cart
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary" 
                  size="lg"
                  onClick={() => {
                    toast.info(`x1 ${product.title} removed from your cart.`);
                    cartContext.removeOneItem(product);
                  }}
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
