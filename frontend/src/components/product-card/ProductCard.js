import { ShoppingCartContext } from '../../CartContext.js'
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { ListedProductCard } from './ProductCard.styled.js';

function ProductCard({product}) {
  const cartContext = useContext(ShoppingCartContext);
  
  const add = () => {
    cartContext.addOneToCart(product);
    toast.info('Added to cart');
  }

  const remove = () => {
    cartContext.removeOneItem(product);
    toast.info('Removed from cart');
  }

  return (
    <ListedProductCard>
      <div className="image-container">
        <img 
          className="product-image"
          src={product.img} 
          alt="unavailable" 
        />
      </div>
      <div className="forum">
        <div className="info-container">
          <h1 className="product-title">{product.title}</h1>
          <h5 className="product-price">{`$${product.cost}`}</h5>    
        </div>
        <div className="button-container">
          <button className='add' onClick={add}> + Add </button>
          <button className='remove' onClick={remove}> - Remove</button>
        </div>
      </div>
    </ListedProductCard>
  )
}

export default ProductCard