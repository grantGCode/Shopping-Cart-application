import Navbar from '../components/NavBar.js'
import { products, getProductData} from '../productStore.js'
import {Row, Col, Form, Button, Stack} from 'react-bootstrap'
import ProductCard from '../components/ProductCard.js'
import { useShoppingCartContext } from '../CartContext.js'
 

function Store() {
  
  const {purgeShoppingCart} = useShoppingCartContext();

  return (
    <div>
      <Navbar />
            <Row
              xs={1} 
              md={3} 
            >
              <Col 
                className="justify-content-center"
              >
              {products.map((product) => 
                (
                  <Col align='center' > 
                    <ProductCard 
                      className="border border-primary"
                      key={product.price}
                      products={product}
                      
                    />  
                  </Col>
                ))
              }
              </Col>
            </Row>
        <Row className="mt-4">
          <Col className="mx-4">
            <Form>
                <Button
                  size='lg'
                  variant="danger" 
                  onClick={purgeShoppingCart} // will return Items to console for to debug
                >Remove All From Cart
                </Button>
            </Form>
          </Col>
        </Row>
    </div>
  )
}

export default Store
