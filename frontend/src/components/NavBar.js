import {Button, Container, Navbar, Modal, Image} from 'react-bootstrap'


export default function NavBar() {

  return (
    <div>
    <Navbar expand='lg' className='nav'>
        <Container>
          <div className='closed-nav-bar'>
            <h2 className='Brand-Name'>U.S. Shopper</h2> {/*Place Holder Website Name */}
            <button>Check Out <Image /></button>
          </div>

          
          <div className='display-modal'>
            <Modal>
              <Modal.Header>
                <Modal.Title>Your Shopping Cart</Modal.Title>
                <Button className='Close-Modal'>X</Button>
                <Modal.Body>
                  There are no items in your shopping cart at this time.
                </Modal.Body>
              </Modal.Header>  
            </Modal>
          </div>
        </Container>  
    </Navbar>
    
    </div>
  )
}

