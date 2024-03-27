export const products = [
{id:`${process.env.PRODUCT_ONE_KEY}`, price: 1, title: 'Product 1', cost: 10.99 },
{id: `${process.env.PRODUCT_TWO_KEY}`, price: 2, title: 'Product 2', cost: 17.95 },
{id: `${process.env.PRODUCT_THREE_KEY}`, price: 3, title: 'Product 3', cost: 8.59 },
{id: `${process.env.PRODUCT_FORE_KEY}`, price: 4, title: 'Product 4', cost: 25.00 },
{id: `${process.env.PRODUCT_FIVE_KEY}`, price: 5, title: 'Product 5', cost: 19.99 }
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

 