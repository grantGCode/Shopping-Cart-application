import Navbar from '../components/navbar/NavBar.js'
import ProductCard from '../components/product-card/ProductCard.js'
import { products } from '../productStore.js'
import { loremIpsum } from 'lorem-ipsum'
import { StoreStyledContainer } from '../components/Globle.styled.js'


const loremText = loremIpsum({
  count: 2,
  units: 'sentences',
  format: 'plain',
});



function Store() {

  return (
    <StoreStyledContainer>
      <Navbar />
      <div className='spot-light-containers'>
        <div className='spot-light'>
          <h1 className='summer'>Those Days of Summer</h1>
          <p>{loremText}</p>
        </div>
      </div>
      <div className="products-containers">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard className='card'
              product={product} // Passing individual product as prop
            />
          </li>
        ))}
      </div>
      <div className='footer'>Powered by S.S.S.C</div>
    </StoreStyledContainer>
  )
}

export default Store