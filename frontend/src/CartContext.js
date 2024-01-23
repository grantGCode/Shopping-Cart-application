import { createContext, useContext, useState } from "react";
import { products, getProductData } from "./productStore";

const ShoppingCartContext = createContext({});

export const CartProvider = ({children}) => {

  const getProductQuantity = () => {
    
  }

  const addOneToCart = () =>{
    /* Addfetch funtionaity */
    
    /* Incrament cart Item count */
      // setCartItemCount((cartStorage) => cartStorage + 1)
  }
    
  const removeOneItem = () => {
    /* Discernment cart Item count */
      // if (cartStorage < 1) {
        // return console.log('Your Shopping cart has no items in it.')
      // } else {
        // setCartItemCount((cartStorage) => cartStorage - 1)
      // };
          
  }
        
  const deleteFromCart = () => {
    /* Purge Cart of All Items */
          
          
    /* Purge Item Count */  
    // setCartItemCount(0)
  }
      
  const getTotaCoast = () => {

    
  }



  const CatFunctionsAndItems = {
    getProductQuantity,
    addOneToCart,
    removeOneItem,
    deleteFromCart,
    getTotaCoast,
    
  }

  return <ShoppingCartContext value={CatFunctionsAndItems}>
    {children}
  </ShoppingCartContext>;

};


// const Items = [];


  export const useShoppingCartContext = () => {

    return useContext(ShoppingCartContext)
  }