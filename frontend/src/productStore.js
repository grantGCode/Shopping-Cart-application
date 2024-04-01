export const products = [
{ id: 1, stripeId:'price_1OqfinDvSYddFJCDaRiUhKbT',  title: 'Product 1', cost: 10.99 },
{ id: 2, stripeId: 'price_1OqfjyDvSYddFJCDtbMEY6sK', title: 'Product 2', cost: 17.95 },
{ id: 3, stripeId: 'price_1OqfkxDvSYddFJCD9JfnZG7I', title: 'Product 3', cost: 8.59 },
{ id: 4, stripeId: 'price_1OqflbDvSYddFJCDrrrNbTJC', title: 'Product 4', cost: 25.00 },
{ id: 5, stripeId: 'price_1OqfmYDvSYddFJCDC1h4RKfC', title: 'Product 5', cost: 19.99 }
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