import {useState} from 'react'
import {Button, Container, Navbar, Modal, Image} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'






export default function NavBar() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return (
    <div> 
    <Navbar expand='lg' className='nav'>
        <Container>
          <div className='closed-nav-bar'>
            <div className='Brand-Name'>{/*Place Holder Website Name */}
            <h2 className='U'>U</h2>
              <h2>. </h2>
              <h2 className='S' >S</h2>
              <h2>.</h2>
              <h2 className='Shopper'> Shopper</h2> 
             </div>
             <Button className= 'Check-Out-Button' type='button' onClick={handleShow}>
                <FontAwesomeIcon className='Check-Out-Button.icon' icon={faCartShopping} /> 
                <p>Check Out</p> 
              </Button>
          </div>

          
          <div className='display-modal'>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Your Shopping Cart</Modal.Title>
                <Button type='button' className='Close-Modal' onClick={handleClose}>X</Button>
                <Modal.Body className='modal-body'>
                  <p>There are no items in your shopping cart at this time.</p>
                </Modal.Body>
              </Modal.Header>  
            </Modal>
          </div>
        </Container>  
    </Navbar>
    
    </div>
  )
}

