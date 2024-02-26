import {Card, Row} from 'react-bootstrap'
import { ShoppingCartContext } from '../CartContext'
import {products, getProductData} from '../productStore'

function ItemCard({products}) {
const itemData = useContext(ShoppingCartContext);


return(
<Form>
    <Card>
        <Row>
            <Col>
            <h3>{products.title}</h3>
            <h3>{item.quantity}</h3>
            <Button
                variant="primary" 
                size="lg"
                onClick={() => {cart.removeOneItem(products)}}
            >
                - Remove From Cart
            </Button>
            </Col>
        </Row>
    </Card>
</Form>
    )
}