import {useState} from 'react'
import {Container, Navbar, Modal, Image, Col, Row, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCartContext } from '../CartContext';
import ItemCard from './ItemCard'


export default function NavBar() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  
  const {cartItemCount, Items, getTotalCost} = useShoppingCartContext()


  return (
    <div> 
    <Navbar className='nav'>
        <Container>
          {/* <div className='closed-nav-bar'> */}
            <Row className="w-100">
              <Col className='Brand-Name' >{/*Place Holder Website Name */}
                <h2 className='U'>U</h2>
                <h2 className='S' >S</h2>
                <h2 className='Shopper'> Shopper</h2> 
              </Col>
              <Col className="d-flex justify-content-end">
                <Button  
                    size='sm'
                    variant='outline-primary' 
                    className= 'Check-Out-Button' 
                    type='button' 
                    onClick={handleShow}
                  >
                    <FontAwesomeIcon icon={faCartShopping} /> 
                    <p>Your Cart Has: {cartItemCount} Items</p>
                  </Button>
                </Col>
              </Row>
          {/* </div> */}

          
          <div className='display-modal'>
            <Modal align='center' className='Modal-Window' show={show} onHide={handleClose}>
              
                <div className='Header'>
                  <Modal.Header className='Header'>
                    <Modal.Title className='Shopping-Cart-Title' >Your Shopping Cart</Modal.Title>
                    <Button 
                      type='button' 
                      className='Close-Modal' 
                      variant="danger" 
                      onClick={handleClose}
                     >X
                    </Button>
                  </Modal.Header>
                </div>  
                   
                <div className='body'>
                  <Modal.Body >
                    {Items.length === 0 ? (
                      <p>There are no items in your shopping cart at this time.</p>
                      ) : 
                        Items.map((item) => 
                          (
                            <Col align='center' > 
                              <ItemCard                   
                                class="border border-primary"
                                key={Items.id}
                                item={item}
                              />  
                            </Col>
                          ))
                        }
                    <h2 className='Total'>Total: {getTotalCost}</h2>
                    <Button 
                      className='btn mt-2'
                      variant='success'
                      onClick={() =>
                        {window.alert(`Thank you for your purchase! 😀`)}
                      }
                    >Purchase Items
                    </Button>
                  </Modal.Body>
                </div>
            </Modal>
          </div>
        </Container>  
    </Navbar>
    
    </div>
  )
}

