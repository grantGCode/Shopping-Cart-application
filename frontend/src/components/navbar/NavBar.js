/* Components*/
import {useState} from 'react'
import { useShoppingCartContext } from '../../CartContext.js';
import ItemCard from '../item-card/ItemCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
/* Styling */
import { ToastContainer } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { NavbarContainer } from './Navbar.styles.js'
import { ModalContainer } from './Modal.styles.js'

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  //open the modal
  const openModal = () => {
    setShowModal(true);
  };
  //close the modal
  const closeModal = () => {
    setShowModal(false);
  };
  
  const {cartItemCount, Items, getTotalCost, purgeShoppingCart} = useShoppingCartContext()

  /* Purchase Items Button on click function*/
  const buyCartContent = async () => {
    try {
      const response = await fetch('https://us-shopper-94591f5ffa5c.herokuapp.com',{
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
      <NavbarContainer>        
        <div className='title-Container'>
          <h1 className='acronym'>S. S. S. C.</h1>
          <p className='full-name'>
            {"(Secure Swift Shopper's Cart)"}
          </p>
        </div>
          <button className='open-cart-button' onClick={openModal}>
            <p className='your-cart'>Your Cart</p> 
            <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
            <p className='item-count'>{`   (${cartItemCount})`}</p>
          </button>
          <div>
            { Items.length === 0 ?
            (null) :
            (<button className='remove-button' onClick={purgeShoppingCart}>
              Remove All
            </button>)}
          </div>
          <div>
            { showModal === false ? 
            (null) : 
            (<ModalContainer showModal={setShowModal}>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h2 className='modal-title'>
                    Your Shopping Cart
                  </h2>
                  <button className='close-modal' onClick={closeModal}>
                    X
                  </button>
                </div>                    
                <div className='modal-body'>
                  {Items.length === 0 ? (
                    <h4 className='no-items'>There are no items in your shopping cart.</h4>
                    ) : Items.map((item) => 
                      ( <div> 
                        <ItemCard                   
                          className="border border-primary"
                          key={Items.id}
                          item={item}
                        />  
                      </div> ))
                    }
                  </div>    
                  <div className='modal-footer'>
                    <h2 className='total-cost'>
                      {`Total: $${getTotalCost()}`}
                    </h2>
                    <button 
                      className='button-purchase' 
                      onClick={() => {
                        toast.success('Possessing your order.');
                        buyCartContent();
                      }}
                    >
                      Purchase Items
                    </button>
                </div>
              </div>
            </ModalContainer>)}
          </div>
      <ToastContainer />
      </NavbarContainer>
  )
}

