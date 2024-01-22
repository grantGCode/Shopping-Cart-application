import { createContext, useContext, useState } from "react";
import { products, getProductData } from "./productStore";

const CartItemContext = createContext({});

export const ItemFunctionProvider = ({children}) => {

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


const ProductFunctionsItems = {
    getProductQuantity,
    addOneToCart,
    removeOneItem,
    deleteFromCart,
    getTotaCoast,
  
  }

  return <CartItemContext value={ProductFunctionsItems}>{children}</CartItemContext>;

};


const Items = [];


  export const useCartItemContext = () => {

    return useContext(CartItemContext)
  }