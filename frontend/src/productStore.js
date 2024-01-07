const products = [
{ id: 1, title: 'Product 1', price: 10.99 },
{ id: 2, title: 'Product 2', price: 17.95 },
{ id: 3, title: 'Product 3', price: 8.59 },
{ id: 4, title: 'Product 4', price: 25.00 },
{ id: 5, title: 'Product 5', price: 19.99 }
]


const getProductData = (id) => {
   let productData = products.find((product) => product.id === id)
   return(productData)
 
    
}

console.log('test')
console.log(getProductData(1))