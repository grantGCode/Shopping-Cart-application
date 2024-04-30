import { createContext, useContext, useState } from "react";
import { getProductData } from "./productStore";
import { toast } from 'react-toastify'
export const ShoppingCartContext = createContext(
  { 
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneItem: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    purgeShoppingCart: () => {}
  });
  
  export const CartProvider = ({children}) => {
    //Shopping cart
    const [Items, setItems] = useState([]); 
    //displayed count of total products in the cart on Stor.jsx
    const [cartItemCount, setCartItemCount] = useState(0);
    const [TotalCost] = useState(0);  
    
    const getProductQuantity = (quantity) => { 
      //Line above Passing in param of the quantity of specific single product in cart
      const getQuantity = Items.find((item) => item.quantity === quantity)
      return getQuantity.quantity  
    }

    // add one product to shopping cart from productStore.js
    const addOneToCart = (product) =>{
      
      // If the products never was in the shopping cart
      if (Items.length === 0 ) {
        setItems([{
          id: product.id, 
          stripeId: product.stripeId, 
          quantity: 1
        }])
      };
        
      // If the product is already in the shopping cart s
      if(Items.length > 0) {
      
        const newItems = Items.map((item) => {
          // If product being added is already in the shopping cart
          if(item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }             
          }
            return item
        });

        // If another product being added is not already in the shopping cart
        if(!newItems.some((item) => 
        item.id === product.id)){
          newItems.push({
            id: product.id, 
            stripeId: product.stripeId,
            quantity: 1})
        };           
        setItems(newItems)
      };
      updateProductInCartCount(true)
    };
      
    // remove one product from shopping cart
    const removeOneItem = (product) => {
      // check quantity of existing item
      Items.forEach((item) => {
        const currentQuantity = getProductQuantity(item.quantity)
    
        // if quantity is = 1 delete from cart
        if (currentQuantity === 1 && item.id === product.id) {
          updateProductInCartCount(false);
          deleteFromCart(item.id);
          // if quantity > 1 the item quantity will be -= by 1
        } else if (currentQuantity > 1 && item.id === product.id) {
          updateProductInCartCount(false);
          // Update the quantity of the item in the cart
          item.quantity -= 1;
        }
      });
    }
    
    //remove a product from the shopping cart
    const deleteFromCart = (itemToDelete) => {
      if (Items.length === 1){
        toast.info(`Your cart is now empty.`)
        setItems([])        
      }else if(Items.length > 1){
        setItems(Items.filter((item )=>item.id !== itemToDelete)
        ); 
      };
    };
    
    // Will return total cost of all item in the cart
    const getTotalCost = () => {
      let totalCost = 0;
      Items.map((item)=>{
          const productData = getProductData(item.id);
          totalCost += (item.quantity * productData.cost);
          return totalCost
      })
      return totalCost.toFixed(2);
    };  
    
    // Used to display number of items in cart on the Store.jsx UI
    const updateProductInCartCount = (bool) => {  

      //if addOneToCart() is called
      if(bool === true){
        setCartItemCount((prevCount) => prevCount + 1);
        //if removeOneFromCart() is called & cartItemCount is above -1
      }else if(bool === false){
        setCartItemCount((prevCount) => prevCount - 1);
      };            

      if(bool === false && cartItemCount === 0){
        return setCartItemCount(0)
      }
    };

    //Delete all products in cart 
    const purgeShoppingCart = () => {
      
      setItems([])
      setCartItemCount(0)  
    }
  
    const CatFunctionsAndItems = {
    
    //functions
      getProductQuantity,
      addOneToCart,
      removeOneItem,
      deleteFromCart,
      getTotalCost,
      setCartItemCount,
      purgeShoppingCart,
      
      //State
      cartItemCount,  
      Items,
      TotalCost,
      
    }
  
    return (
      <ShoppingCartContext.Provider 
      value={CatFunctionsAndItems}
      >
      {children}
      </ShoppingCartContext.Provider>
    );

  };

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}