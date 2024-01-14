import  {useState} from 'react'
import Navbar from '../components/NavBar.js'
import {products, getProductData} from '../productStore.js'
import {Row, Col, Form, Button} from 'react-bootstrap'


function Store() {
const [CartItems, setCartItems] = useState(0);

// const addOneToCart = () =>{
//   let itemsInCart = CartItems
//   /* Addfetch funtionaity */
  
//   /* Incrament csrt Item count */
//       setCartItems( itemsInCart += 1)
//   }
     


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
          <h2>Your Cart Has: {CartItems} Items</h2>
          <Button /* onClick={addOneToCart()} */>+ Add To Cart</Button>
          <Button>- Remove From Cart</Button>
          <Button>Remove All From Cart</Button>
        </Form>
    </div>
  )
}

export default Store
