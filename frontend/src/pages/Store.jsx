import  {useState} from 'react'
import Navbar from '../components/NavBar.js'
import { products, getProductData} from '../productStore.js'
import {Row, Col, Form, Button, Stack} from 'react-bootstrap'
import ProductCard from '../components/ProductCard.js'
import { useShoppingCartContext } from '../CartContext.js'
 

function Store() {
  
  const { CartItemCount, deleteFromCart} = useShoppingCartContext();

  

  return (
    <div>
      <Navbar />
            <Row
              xs={1} 
              md={3} 
            >
              {products.map((product, index) => 
                (
                  <Col align='center' key={index}> 
                    <ProductCard class="border border-primary"  />  
                  </Col>
                ))
              }
            </Row>
        <Form>
          <h2>Your Cart Has: {CartItemCount} Items</h2>
          <div className='buttons'>
            <Button
              variant="danger" 
              onClick={deleteFromCart}
            >Remove All From Cart
            </Button>
          </div>
        </Form>
    </div>
  )
}

export default Store
