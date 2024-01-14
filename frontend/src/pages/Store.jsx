import  {useState} from 'react'
import Navbar from '../components/NavBar.js'
import {products, getProductData} from '../productStore.js'
import {Row, Col, Form, Button} from 'react-bootstrap'


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
        <Row style=
          {{
            display: 'block',
            padding:10, 
            margin:95, 
            backgroundColor: 'lightBlue'
          }}>
          {products.map((products, index) => (
            <Col 
              style={{margin:12}} 
              className='products'  
              key={index}
            >
            {products.title}{` $${products.price}`}
          </Col>
        ))}
        </Row>
        <Form>
          <h2>Your Cart Has: {CartItemCount} Items</h2>
          <Button onClick={addOneToCart}>+ Add To Cart</Button>
          <Button onClick={removeOneItem}>- Remove From Cart</Button>
          <Button onClick={deleteFromCart}>Remove All From Cart</Button>
        </Form>
    </div>
  )
}

export default Store
