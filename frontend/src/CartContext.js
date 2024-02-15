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
            }, console.log('test')
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
    const removeOneItem = (id) => {


      setItems(
        // check quantity of existing product
         Items.map(item => {
          if(item.id === id){
            return{...item, quantity:item.quantity - 1}
          }else{
            return item
          }
        //if quantity is = 1 delete from cart
        
        //else use setter and update object in state array by decrementing by 1
      })
      );
    };

      //Use this will server as a temporry place to log Items to the console
      const deleteFromCart = () => {
      
        return console.log('from line 88', Items)
        getTotalCoast()
        
      }
      
      
  const getTotalCoast = (product) => {


    // let totalPrice = Items.map((itme) => {
    //   if(item.id === product.id) {

    //     console.log(product.price)
    //   }
    // });
    
    // return console.log(Items);
  
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