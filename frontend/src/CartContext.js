import { createContext, useState } from "react";
import { products, getProductData } from "./productStore";


export const getProductQuantity = () => {

}

export const addOneToCart = () =>{
  /* Addfetch funtionaity */
  
  /* Incrament cart Item count */
    setCartItemCount((cartStorage) => cartStorage + 1)
  }

export  const removeOneItem = () => {
    /* Discernment cart Item count */
      // if (cartStorage < 1) {
        // return console.log('Your Shopping cart has no items in it.')
      // } else {
      setCartItemCount((cartStorage) => cartStorage - 1)
      // };
  
}
       
export  const deleteFromCart = () => {
    /* Purge Cart of All Items */
  
  
    /* Purge Item Count */  
    setCartItemCount(0)
}

export const getTotaCoast = () => {

}

export const Items = [];