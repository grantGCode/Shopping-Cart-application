import { createContext, useContext, useState } from "react";
import { products, getProductData } from "./productStore";



const ShoppingCartContext = createContext({});

export const CartProvider = ({children}) => {
  const [Items, setItems] = useState([]);
  const [CartItemCount, setCartItemCount] = useState(0);



  const getProductQuantity = () => {
    
  }

  const addOneToCart = (id, data) =>{
    
    let  quantity = 0
    let item = {productId:id, productQuantity:quantity}
    
    // fetch product by id
      let itemData = getProductData(data) 
      // .then (response => {
      //   if (!response.ok) {
      //     console.log('there was a problem getting the data line 24-28');
      //   }
      // })
    // Adding Items to cart
      // .then(data => setItems(Items.push(item)))
      
    // Incrament cart Item count
      // .then(setCartItemCount((cartStorage) => cartStorage + 1))

      console.log(itemData)
      
  };
    
  const removeOneItem = () => {
    /* Discernment cart Item count */
      // if (cartStorage < 1) {
        // return console.log('Your Shopping cart has no items in it.')
      // } else {
        setCartItemCount((cartStorage) => cartStorage - 1)
      // };
          
  }
        
  const deleteFromCart = () => {
    /* Purge Cart of All Items */
          
          
    /* Purge Item Count */  
    setCartItemCount(0)
  }
      
  const getTotaCoast = () => {

    
  }



  const CatFunctionsAndItems = {
    getProductQuantity,
    addOneToCart,
    removeOneItem,
    deleteFromCart,
    getTotaCoast,
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