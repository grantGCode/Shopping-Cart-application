import { Card, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { products, getProductData} from '../productStore.js'
import { ShoppingCartContext } from '../CartContext.js'
import { useContext } from 'react';

function ProductCard({products}) {
  const cart = useContext(ShoppingCartContext);

  


  return (
    <Form>
        <Card>
            <Card.Body>
              <Row xs={1} md={3}>
                <Col>
                  <p>{products.title}</p>
                  <p>{`$${products.price}`}</p>    
                  {' '}
                  <Button
                    variant="secondary" 
                    size="sm" 
                    onClick={() => {cart.addOneToCart(products)}}
                  >
                   + Add To Cart
                  </Button>
                    {' '}
                  <Button
                    variant="secondary" 
                    size="sm"
                    onClick={() => {cart.removeOneItem(products)}}
                  >
                    - Remove From Cart
                  </Button>
                </Col>
              </Row>
            </Card.Body>
        </Card>
    </Form>
  )
}

export default ProductCard
