export const products = [
{ price: 1, title: 'Product 1', cost: 10.99 },
{ price: 2, title: 'Product 2', cost: 17.95 },
{ price: 3, title: 'Product 3', cost: 8.59 },
{ price: 4, title: 'Product 4', cost: 25.00 },
{ price: 5, title: 'Product 5', cost: 19.99 }
]


export const getProductData = (id) => {

   let productData = products.find((product) => product.price === id)

   if(productData === undefined){
    console.log(`There is no product for this ID: ${id}`)
    return undefined
   } else {
      return productData 
   }  
}

 