import {useState} from 'react'
import {Button, Container, Navbar, Modal, Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon="fa-light fa-receipt" />






export default function NavBar() {
  
  const [show, setShow] = useState(false);
  const [Total, SetTotal] = useState(0.00)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  


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
             <Button className= 'Check-Out-Button' type='button' onClick={handleShow}>
                <div className='icon'>
            <FontAwesomeIcon icon={faCartShopping} /> 
                </div>
                <p className='text'>Check Out</p> 
              </Button>
          </div>

          
          <div className='display-modal'>
            <Modal className='Modal-Window' show={show} onHide={handleClose}>
              
                <div className='Header'>
                  <Modal.Header className='Header'>
                    <Modal.Title className='Shopping-Cart-Title' >Your Shopping Cart</Modal.Title>
                    <Button type='button' className='Close-Modal' onClick={handleClose}>X</Button>
                  </Modal.Header>
                </div>  
                <div className='body'>
                <Modal.Body >
                  <p>There are no items in your shopping cart at this time.</p>
                </Modal.Body>
                </div>
                <div className='footer'>
                  <Modal.Footer>
                    <h3 className='Total'>Total: ${Total}</h3>
                    <Button type='button' className='pay-button'><FontAwesomeIcon icon={faReceipt} /> Purchase</Button>
                  </Modal.Footer>
                </div>

            </Modal>
          </div>
        </Container>  
    </Navbar>
    
    </div>
  )
}

