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
    
    
    const getProductQuantity = (product) => {

      const getQuantity = Items.find(item => {console.log(` QTY of: ${item.quantity} `)})
      return getQuantity
      
    }

    // add one product to shoppig cart from productStore.js
    const addOneToCart = (product) =>{

      // If the products never was in the shoping cart
      if (Items.length === 0 ) {
        setItems([{id: product.id, quantity: 1}])
      };
        
      // If the product is already in the shopping cart 
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

        // If product being added is not already in the shopping cart
        if(!newItems.some((item) => 
        item.id === product.id)){
          newItems.push({id: product.id, quantity: 1})
        };           
        setItems(newItems)
      };
    };
      
    // remove one product from shoppig cart
    const removeOneItem = (product) => {

      if(Items.length > 1){

        const reduceItemQuantity = Items.map(item => {
            
          //If said product is in shopping cart
          if(item.quantity > 1 && item.id === product.id){
            return {
              ...item,
              quantity: item.quantity - 1
            }, console.log('Test line 69', item)
            
          //If said product is not in the shopping cart   
          }else{
            window.alert(`Sorry it appears ${product.title} is not in your cart.`)
          }

          return item

        });

        setItems(reduceItemQuantity)
        
        //If there is just only 1 of said product in the cart
      }else if(Items.some((item) => item.quantity = 1 && item.id === product.id)){
        const filteredItems = Items.filter(filteredItem => filteredItem.id !== product.id);
        return setItems(filteredItems)
      }
    };

      
      const deleteFromCart = () => {
      
        return console.log('from line 88', Items)
        
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