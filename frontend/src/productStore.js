export const products = [
{ id: 1, stripeId:'price_1OqfinDvSYddFJCDaRiUhKbT',  title: 'Sun & Surf T-Shirt', img:'./images/sunAndSurfShirt.jpg', cost: 44.99 },
{ id: 2, stripeId: 'price_1OqfjyDvSYddFJCDtbMEY6sK', title: 'Roman North T-Shirt', img:'./images/roamnorthShirt.jpg', cost: 44.99 },
{ id: 3, stripeId: 'price_1OqfkxDvSYddFJCD9JfnZG7I', title: 'Mulehaus T-Shirt', img:'./images/mulehausShirt.jpg', cost: 39.99 },
{ id: 4, stripeId: 'price_1OqflbDvSYddFJCDrrrNbTJC', title: 'Journey Shirt', img:'./images/journeyShirt.jpg', cost: 80.00 },
{ id: 5, stripeId: 'price_1OqfmYDvSYddFJCDC1h4RKfC', title: 'Dream Top', img:'./images/dreamTop.jpg', cost: 46.00 }
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