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
    const [Items, setItems] = useState();
    const [CartItemCount, setCartItemCount] = useState(0);
    
    
    const getProductQuantity = (product) => {

      console.log(product.id)
      
    }

    // add one product to shoppig cart from productStore.js
    const addOneToCart = (productId) =>{
      
      const newProduct = products.map(product => ({
        id: product, 
        quantity: 0
        }));
        const productIndex = newProduct.findIndex(product => product.id === productId);
        if(productIndex !== -1) {
          console.log("from line 39", productIndex)
          newProduct[productIndex].quantity += 1
        } else {
          console.log("from line 41", productIndex)
          window.alert(
            "sorry this product seems to not apear in our records."
            );
          }
          
      return console.log('from line 48', newProduct)
      
    };
    
    
    const removeOneItem = () => {
      // this function will be calling getProductsData
      getProductData(Items)
      
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