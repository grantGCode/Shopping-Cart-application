import {useState} from 'react'
import {Container, Navbar, Modal, Image, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
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
    <Navbar expand='lg' className='nav'>
        <Container>
          <div className='closed-nav-bar'>
            <div className='Brand-Name'>{/*Place Holder Website Name */}
            <h2 className='U'>U</h2>
              <h2 className='S' >S</h2>
              <h2 className='Shopper'> Shopper</h2> 
             </div>
             <Button variant='primary' className= 'Check-Out-Button' type='button' onClick={handleShow}>
                <div className='icon'>
                  <FontAwesomeIcon icon={faCartShopping} /> 
                </div> 
                <p>Your Cart Has: {cartItemCount} Items</p>
              </Button>
          </div>

          
          <div className='display-modal'>
            <Modal align='center' className='Modal-Window' show={show} onHide={handleClose}>
              
                <div className='Header'>
                  <Modal.Header className='Header'>
                    <Modal.Title className='Shopping-Cart-Title' >Your Shopping Cart</Modal.Title>
                    <Button type='button' className='Close-Modal' onClick={handleClose}>X</Button>
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
                                Items={item}
                              />  
                            </Col>
                          ))
                        }
                    <h2 className='Total'>Total: {getTotalCost}</h2>
                    <Button 
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

