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
    const [Items, setItems] = useState(null);
    const [CartItemCount, setCartItemCount] = useState(0);
    
    
    const getProductQuantity = (product) => {

      console.log(product.id)
      
    }

    // add one product to shoppig cart from productStore.js
    const addOneToCart = (product) =>{
      
      const newProduct = products.map(product => ({
        id: product.id, 
        quantity: 0
        }))
        for (let i = 0; i < products.length; i++) {
        if(newProduct[i].id === products[i].id) {
          newProduct[i].quantity += 1
        } else if(newProduct[i].id === products[i].id){
          window.alert(
            `sorry this is emarising there not a product in our records with the name ${product.title}`
            );
        }}

      // return setItems()
      // getProductQuantity(newProduct)
      return console.log(newProduct) 
    
    };
    
    const removeOneItem = (product, ) => {
      //Remove one product{} from Items[]
      for (let i = 0; i < Items.length; i++) {
        if (Items[i].id === product.id) {
          Items.splice(i, 1);
          /* Discernment cart Item count */
          setCartItemCount((cartStorage) => cartStorage -= 1)
          window.alert(`${product.title} has been removed from your shopping cart`)
          // Update Total cost of all products
            getTotalCoast(product.id, product.price)
          break;
        }else if (Items[i].id !== product.id) {
          console.log(`There appears is no ${product.title} in your cart.`)
        }
    }
    console.log(Items)          
  }
  
  const deleteFromCart = () => {
    /* Purge Cart of All Items */
    setItems(null)
    window.alert('All items have been removed from your shopping cart.')  
    
    /* Purge Item Count */  

  }
  
  
  const getTotalCoast = () => {


    let totalPrice = Items.map(Items.price);
    
    return console.log(`Total Price: $${totalPrice}`);
  
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