import {useState} from 'react'
import {Button, Container, Navbar, Modal, Image} from 'react-bootstrap'



export default function NavBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return (
    <div>
    <Navbar expand='lg' className='nav'>
        <Container>
          <div className='closed-nav-bar'>
            <h2 className='Brand-Name'>U.S. Shopper</h2> {/*Place Holder Website Name */}
            <Button type='button' onClick={handleShow}>Check Out <Image /></Button>
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

