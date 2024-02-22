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
      //Shopping cart
    const [Items, setItems] = useState([]); 
    
    
      //displayed count of total products in the cart on Stor.jsx
    const [cartItemCount, setCartItemCount] = useState(0);  
    
    const getProductQuantity = (quantity) => { 
      //Line above Passing in param of the quantity of specific single product in cart 

      const getQuantity = Items.find((item) => item.quantity === quantity)
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
      // updateProductInCartCount()
    };
    
      
    // remove one product from shoppig cart
    const removeOneItem = (product) => {
      
     // check quantity of existing product
      Items.map((item) => {
        const currentQuantity = getProductQuantity(item.quantity)

        // if quantity is = 1 delete from cart
        if(currentQuantity === 1){
          deleteFromCart(item)
          // Use setter & update object in state array by -= by 1
        }else{
          setItems(      
            item.id === product.id
            ?
            {...item, quantity:item.quantity -= 1}
            : item
          )
        }
      })   
      updateProductInCartCount(false) 
    };    
    

    //remove a product from the shoping cart
    const deleteFromCart = (product) => {

      setItems(Items.filter(disgardedItem => {    
          return disgardedItem.id !== product.id
        })
      );
    };
    
      
      
  const getTotalCoast = () => {
    
    let costOfAll = 0
    
    const totalPrice = Items.map(item => {   
      
      //Rechive all price refences from the productStore products array. 
      const productRefData = getProductData(item.id)
      
        if(item.id === productRefData.id){
          costOfAll += (item.quantity * productRefData.price) 
          return costOfAll
        }
      })
      return console.log(costOfAll)
    }
  
    /* Work in progress */
    
    // Usde to display number of items in cart on the Store.jsx UI
    const updateProductInCartCount = () => {  
        
        const getQuantity = Items.map((item) => {
          let numberOfAllInCart = 0
          
          //Keep the displayed number of Items above -1
          if(Items.length < 0){
            
            return setCartItemCount(0)
            // add or subtract number of Items in cart
          }else{
            numberOfAllInCart += (item.quantity * Items.length)
            return setCartItemCount(numberOfAllInCart)
          }
          
      })      
    }
  
  /* not added to Remove all from cart button
  to debub with showInsideCart()*/

  //Delete all products in cart 
  const purgeShoppingCart = () => {
    
    return setItems([]),
    setCartItemCount(0)  
  }
  

  //For debuging (will return Items to console for to debug)
  const showInsideCart = () => {console.log(Items)}
  
  
  
  const CatFunctionsAndItems = {
   
   //functions
    showInsideCart,
    getProductQuantity,
    addOneToCart,
    removeOneItem,
    deleteFromCart,
    getTotalCoast,
    setCartItemCount,
    
    cartItemCount,  
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