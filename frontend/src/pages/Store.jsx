import  {useState} from 'react'
import Navbar from '../components/NavBar.js'
import { products, getProductData} from '../productStore.js'
import {Row, Col, Form, Button, Stack} from 'react-bootstrap'
import ProductCard from '../components/ProductCard.js'
import { useShoppingCartContext } from '../CartContext.js'
 

function Store() {
  
  const { showInsideCart} = useShoppingCartContext();

  

  return (
    <div>
      <Navbar />
            <Row
              xs={1} 
              md={3} 
            >
              {products.map((product) => 
                (
                  <Col align='center' > 
                    <ProductCard 
                      class="border border-primary"
                      key={products.id}
                      products={product}
                    />  
                  </Col>
                ))
              }
            </Row>
        <Form>
          <div className='buttons'>
            <Button
              variant="danger" 
              onClick={showInsideCart} // will return Items to console for to debug
            >Remove All From Cart
            </Button>
          </div>
        </Form>
    </div>
  )
}

export default Store
