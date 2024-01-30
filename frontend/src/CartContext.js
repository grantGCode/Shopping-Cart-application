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
    const [Items, setItems] = useState([]);
    const [CartItemCount, setCartItemCount] = useState(0);
    
    
    
    const getProductQuantity = (product) => {
      const idCount = {};

      // Count occurrences of each id
      for ( product of Items) {
          const id = product.id;
          idCount[id] = (idCount[id] || 0) + 1;
      }
  
      // Print the count of each id to the console
      for (const id in idCount) {
          console.log(`ID ${id} appears ${idCount[id]} times in the array`);
      }
  
    }

    
    const addOneToCart = (product) =>{
      
      // Adding 1 product{} to Items[]
      Items.push(product);
      getProductQuantity(product)
      window.alert(`${product.title} has been added to your shopping cart.`)
      console.log(Items)
      
      // Incrament cart Item count
      setCartItemCount((cartStorage) => cartStorage += 1)
      
      // Update Total cost of all products
      getTotalCoast(product.id, product.price)  
    };
    
    const removeOneItem = (product, ) => {
      //Remove one product{} from Items[]
      for (let i = 0; i < Items.length; i++) {
        if (Items[i].id === product.id) {
          Items.splice(i, 1);
          /* Discernment cart Item count */
          setCartItemCount((cartStorage) => cartStorage -= 1)
          getProductQuantity(product)
          window.alert(`${product.title} has been removed from your shopping cart`)
          // Update Total cost of all products
            getTotalCoast(product.id, product.price)
          break;
        }else if (Items[i].id !== product.id) {
          console.log(`There appears is no ${product.title} in your cart.`)
        }//else(Items.length === 0){
          //   console.log("It appears your shopping cart is empty")
          // }
    }
    console.log(Items)          
  }
  
  const deleteFromCart = () => {
    /* Purge Cart of All Items */
    setItems([])
    window.alert('All items have been removed from your shopping cart.')  
    
    /* Purge Item Count */  
    setCartItemCount(0)
  }
  
  
  const getTotalCoast = () => {

    let totalPrice = 0
    for (let i = 0; i < Items.length; i++) {
      totalPrice += Items[i].price;
    }
  
    return console.log(`Total Price: $${totalPrice}`);
    
  }
  
  
  const CatFunctionsAndItems = {
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