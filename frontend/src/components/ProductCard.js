import { Card, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { products, getProductData} from '../productStore.js'
import { ShoppingCartContext } from '../CartContext.js'
import { useContext } from 'react';

function ProductCard() {
  const cart = useContext(ShoppingCartContext);
  // const { addOneToCart, removeOneItem,} = useShoppingCartContext();

  return (
    <Form>
        <Card>
            <Card.Body>
              <Row xs={1} md={3}>
                <Col>
                  <p>{products.map(title)}</p>{` $${products.map(price)}`}<p></p>
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
