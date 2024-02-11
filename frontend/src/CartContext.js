import { createContext, useContext, useState } from "react";
import { products, getProductData } from "./productStore";



export const ShoppingCartContext = createContext(
  { 
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneItem: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
  });
  
  export const CartProvider = ({children}) => {
    const [Items, setItems] = useState([]); //Shopping cart
    const [CartItemCount, setCartItemCount] = useState(0);
    
    
    const getProductQuantity = (product, id) => {

      console.log(product.id)
      
    }

    // add one product to shoppig cart from productStore.js
    const addOneToCart = (product, id) =>{


      // If the products never was in the shoping cart
        if (Items.length === 0 ) {
          setItems([{id: product.id, quantity: 1}])
        };
        
        
        // If the product is already in the shopping cart 
        if(Items.length > 0) {
          
          const newItems = Items.map((item) => {
            if(item.id === product.id) {
              return {
                ...item,
                quantity: item.quantity + 1
              }
            }else if(item.id !== product.id){
              console.log('Line 47 test')
              Items.push({id: product.id, quantity: 1})
            }           
            return item 
          });
          setItems(newItems);
        }
      };
      
      
      const removeOneItem = () => {
        // this function will be calling getProductsData
        // getProductData(Items)
        return console.log('from line 58', Items)
        
      }
  
  const deleteFromCart = () => {
    /* Purge Cart of All Items */
    setItems(null)
    window.alert('All items have been removed from your shopping cart.')  
    
    /* Purge Item Count */  

  }
  
  
  const getTotalCoast = () => {


    let totalPrice = Items.map(Items.price);
    
    return console.log(Items);
  
  }
  
  
  
  
  
  const CatFunctionsAndItems = {
   
   //functions
    getProductQuantity,
    addOneToCart,
    removeOneItem,
    deleteFromCart,
    getTotalCoast,
    setCartItemCount,
    
    CartItemCount,  
    Items,
    
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