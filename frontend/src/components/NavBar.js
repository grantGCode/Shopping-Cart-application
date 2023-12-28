import {Button, Container, Navbar, Modal, Image} from 'react-bootstrap'


export default function NavBar() {

  const GoToCart = () => {
    
  }

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

