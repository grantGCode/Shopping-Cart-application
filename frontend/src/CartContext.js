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
    getTotalCost: () => {},
    purgeShoppingCart: () => {}
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

    
    // add one product to shopping cart from productStore.js
    const addOneToCart = (product) =>{

      // If the products never was in the shopping cart
      if (Items.length === 0 ) {
        // price = product id for Stripe's format.
        setItems([{price: product.id, quantity: 1}])
      };
        
      // If the product is already in the shopping cart 
      if(Items.length > 0) {
      
        const newItems = Items.map((item) => {
          // If product being added is already in the shopping cart
          if(item.price === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }             
          }
            return item
        });

        // If another product being added is not already in the shopping cart
        if(!newItems.some((item) => 
        item.price === product.id)){
          // price = product id for Stripes requirements
          newItems.push({price: product.id, quantity: 1})
        };           
        setItems(newItems)
      };
      updateProductInCartCount(true)
    };
    
      
    // remove one product from shopping cart
    const removeOneItem = (product) => {

     // check quantity of existing product
      Items.map((item) => {
        const currentQuantity = getProductQuantity(item.quantity)

        // if quantity is = 1 delete from cart
        if(currentQuantity === 1 && item.price === product.id){
          return deleteFromCart(item)
        // Use setter & update object in state array by -= by 1
        }else if(currentQuantity > 1){
          return setItems(      
          item.price === product.id
          ?
          [{...item, quantity: item.quantity -= 1}]
            : item
          )
        }
      })   
      updateProductInCartCount(false) 
    };    
    

    //remove a product from the shopping cart
    const deleteFromCart = (itemToDelete) => {
      setItems(Items.filter(item => { 
        if (Items.length === 1){
          return [] 
        } else if(Items.length > 1 &&  
          item.price !== itemToDelete.price)
          { 
            return  item.price !== itemToDelete.price
        }})
      );
      console.log(Items)
    };
    
      
      
    const getTotalCoast = () => {
      
      
      const totalPrice = Items.map(item => {   
        
        let costOfAll = 0
        //Recive all price references from the productStore products array. 
        const productRefData = getProductData(item.price)
        
        if(item.price === productRefData.id){
          costOfAll += (item.quantity * productRefData.price) 
          return costOfAll
        }
      })
      return console.log(totalPrice)
    }
  
    /* Work in progress */
    
    // Used to display number of items in cart on the Store.jsx UI
    const updateProductInCartCount = (bool) => {  

      //if addOneToCart() is called
      if(bool === true){
        setCartItemCount((prevCount) => prevCount + 1);
        //if removeOneFromCart() is called & cartItemCount is above -1
      }else if(bool === false){
        setCartItemCount((prevCount) => prevCount - 1);
      };            

      if(bool === false && cartItemCount === 0){
        return setCartItemCount(0)
      }
    };
  
  /* not added to Remove all from cart button
  to debug with showInsideCart()*/

  //Delete all products in cart 
  const purgeShoppingCart = () => {
    
    return setItems([]),
    setCartItemCount(0)  
  }
  

  //For debugging (will return Items to console for to debug)
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
    purgeShoppingCart,
    
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