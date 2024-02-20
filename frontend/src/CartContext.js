import { createContext, useContext, useState } from "react";
import { products, getProductData } from "./productStore";



export const ShoppingCartContext = createContext(
  { 
    items: [],
    showInsideCart: () => {},
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

      const getQuantity = Items.find(item => item.quantity)
      
      return getQuantity.quantity
      
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

        // If another product being added is not already in the shopping cart
        if(!newItems.some((item) => 
        item.id === product.id)){
          newItems.push({id: product.id, quantity: 1})
        };           
        setItems(newItems)
      };
    };
      
    // remove one product from shoppig cart
    const removeOneItem = (product) => {
      
     // check quantity of existing product
      const currentQuantity = getProductQuantity(product)
      
      // if quantity is = 1 delete from cart
      Items.map(item => {
        if(currentQuantity === 1){
          deleteFromCart(item)
          // else use setter and update object in state array by decrementing by 1
        }else{
          setItems(      
            item.id === product.id
            ?
            {...item, quantity:item.quantity -= 1}
            : item
          )
        }
      })    
    };    
    
    //remove a product from the shoping cart
    const deleteFromCart = (product) => {
      setItems( Items.filter(disgardedItem => {
          return disgardedItem.id !== product.id
        })
      );
    };
    
      
      
  const getTotalCoast = () => {

    
    const totalPrice = Items.map(item => {
      
      const productRefData = getProductData(item.id)
      
      //Rechive all price refences from the productStore products array & Id's associated. 
        
        if(item.id === productRefData.id){
        
          return item.id * productRefData.price
        }
    })
  }
  

  //For debuging (will return Items to console for to debug)
  const showInsideCart = () => {getTotalCoast()}
  
  
  
  
  
  const CatFunctionsAndItems = {
   
   //functions
    showInsideCart,
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