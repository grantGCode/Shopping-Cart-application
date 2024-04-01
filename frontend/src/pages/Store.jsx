import Navbar from '../components/NavBar.js'
import { products} from '../productStore.js'
import {Row, Col, Form, Button,} from 'react-bootstrap'
import ProductCard from '../components/ProductCard.js'
import { useShoppingCartContext } from '../CartContext.js'
 

function Store() {
  
  const {purgeShoppingCart} = useShoppingCartContext();

  return (
    <div>
      <Navbar />
            <Row xs={1} md={3}>
            {products.map((product) => (
          <Col key={product.id} className="justify-content-center">
            <ProductCard
              className="border border-primary"
              product={product} // Passing individual product as prop
            />
          </Col>
        ))}
            </Row>
        <Row className="mt-4">
          <Col className="mx-4">
            <Form>
                <Button
                  size='lg'
                  variant="danger" 
                  onClick={purgeShoppingCart}
                >Remove All From Cart
                </Button>
            </Form>
          </Col>
        </Row>
    </div>
  )
}

export default Store
