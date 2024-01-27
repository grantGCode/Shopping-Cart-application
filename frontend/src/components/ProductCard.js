import { Card, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { products, getProductData} from '../productStore.js'
import { ShoppingCartContext } from '../CartContext.js'
import { useContext } from 'react';

function ProductCard({products}) {
  const cart = useContext(ShoppingCartContext);
  // const titles = products.map(product => product.title)
  // const prices = products.map(product => product.price)
  


  return (
    <Form>
        <Card>
            <Card.Body>
              <Row xs={1} md={3}>
                <Col>
                 <div>
                    <p>{products.title}</p>
                  </div>
                  <div>  
                    <p>{`$${products.price}`}</p>    
                 </div>
                  {' '}
                  <Button
                    variant="primary" 
                    size="lg" 
                    // onClick={() => {cart.addOneToCart(product)}}
                  >
                   + Add To Cart
                  </Button>
                    {' '}
                  <Button
                    variant="primary" 
                    size="lg"
                    // onClick={removeOneItem}
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
