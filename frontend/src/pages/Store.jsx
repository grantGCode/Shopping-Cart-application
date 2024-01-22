import  {useState} from 'react'
import Navbar from '../components/NavBar.js'
import { products, getProductData} from '../productStore.js'
import {Row, Col, Form, Button, Stack} from 'react-bootstrap'
import ProductCard from '../components/ProductCard.js'


function Store() {
const [CartItemCount, setCartItemCount] = useState(0);

const addOneToCart = () =>{
    /* Addfetch funtionaity */
  
  /* Incrament cart Item count */
    setCartItemCount((cartStorage) => cartStorage + 1)
  }

const removeOneItem = () => {
  /* Discernment cart Item count */
    // if (cartStorage < 1) {
      // return console.log('Your Shopping cart has no items in it.')
    // } else {
    setCartItemCount((cartStorage) => cartStorage - 1)
    // };

}
     
const deleteFromCart = () => {
  /* Purge Cart of All Items */


  /* Purge Item Count */  
  setCartItemCount(0)
}

  return (
    <div>
      <Navbar />
      <h2>store.js</h2>
            <Stack direction="horizontal" gap={3}>
              <ProductCard class="border border-primary"  />  
            </Stack>
        <Form>
          <h2>Your Cart Has: {CartItemCount} Items</h2>
          <div className='buttons'>
            <Button 
              variant="primary" 
              size="lg" 
              onClick={addOneToCart}
            >+ Add To Cart
            </Button>
            <Button 
              onClick={removeOneItem}
              >- Remove From Cart
            </Button>
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
