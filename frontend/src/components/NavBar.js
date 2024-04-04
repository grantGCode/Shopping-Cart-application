import {useState} from 'react'
import {Container, Navbar, Modal, Col, Row, Button, ToastContainer} from 'react-bootstrap'
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCartContext } from '../CartContext';
import ItemCard from './ItemCard'


export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  
  const {cartItemCount, Items, getTotalCost} = useShoppingCartContext()

  const buyCartContent = async () => {
    try {
      const response = await fetch('https://us-shopper-94591f5ffa5c.herokuapp.com/', { //update fetch
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Items)
      });
  
      //redirect after response
      if (response.ok) {
      const responseData = await response.json();
  
        if (responseData.url) {
          window.location.assign(responseData.url);
        }
      } else {
        toast.error('Failed to fetch:', response.status, response.statusText); 
      }
      
      //If const response should fail.
    } catch (error) {
      toast.error('An unexpected error occurred:');
      console.log(error);
    }
  };
  

  return (
    <div> 
    <Navbar className='Nav-BG'>{/*Nav*/}
        <Container>
            <Row className="w-100">
              <Col className='Brand-Name'>{/*Place Holder Website Name */}
                <h1 className='Title-U'>U</h1>
                <h1 className='Title-S'>S</h1> 
                <h1 className='Title-Shopper'>Shopper</h1> 
              </Col>
              <Col className="d-flex justify-content-end">
                <Button  
                    size='lg'
                    variant='primary' 
                    className= 'Check-Out-Button'
                    type='button' 
                    onClick={handleShow}
                  >
                    <p className='my-0 mx-0'>
                      <FontAwesomeIcon icon={faCartShopping} /> Your Cart Has:
                    </p> 
                    <p className='my-0 mx-0'>
                      {cartItemCount} Items
                    </p>
                  </Button>
                </Col>
              </Row>

          
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
                      ) : Items.map((item) => 
                          (
                            <Col align='center' > 
                              <ItemCard                   
                                className="border border-primary"
                                key={Items.id}
                                item={item}
                              />  
                            </Col>
                          ))
                        }
                    <h2 className='Total'>{`Total: $${getTotalCost()}`}</h2>
                    <Button 
                      className='btn mt-2'
                      variant='success'
                      onClick={() => {
                          toast.success('Possessing your order.');
                          buyCartContent();
                          //redirect to Stripe checkout session.url
                        }}
                    >Purchase Items
                    </Button>
                  </Modal.Body>
                </div>
            </Modal>
          </div>
        </Container>  
    </Navbar>
    <ToastContainer />
    </div>
  )
}

