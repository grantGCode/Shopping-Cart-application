import {Card, Form, Row, Col, Button} from 'react-bootstrap'
import { useShoppingCartContext } from '../CartContext'
import {products, getProductData} from '../productStore'
import {useContext} from "react"

function ItemCard({products}) {
// const itemData = useContext(ShoppingCartContext);
const {getProductQuantity, removeOneItem} = useShoppingCartContext()




return(
<Form>
    <Card>
        <Row>
            <Col>
            <h3>{getProductData()}</h3>
            <h3>{getProductQuantity}</h3>
            <Button
                // variant="primary" 
                // size="lg"
                // onClick={() => {cart.removeOneItem(products)}}
            >
                - Remove From Cart
            </Button>
            </Col>
        </Row>
    </Card>
</Form>
    )
}

export default ItemCard