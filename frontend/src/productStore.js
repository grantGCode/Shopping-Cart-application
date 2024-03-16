export const products = [
{ id: 1, title: 'Product 1', price: 10.99 },
{ id: 2, title: 'Product 2', price: 17.95 },
{ id: 3, title: 'Product 3', price: 8.59 },
{ id: 4, title: 'Product 4', price: 25.00 },
{ id: 5, title: 'Product 5', price: 19.99 }
]


export const getProductData = (id) => {

   let productData = products.find((product) => product.id === id)

   if(productData === undefined){
    console.log(`There is no product for this ID: ${id}`)
    return undefined
   } else {
      return productData 
   }  
}

 