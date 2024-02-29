import {Card, Form, Row, Col, Button} from 'react-bootstrap'
import { useShoppingCartContext, ShoppingCartContext } from '../CartContext'
import {products} from '../productStore'
import {useContext} from "react"

function ItemCard({item}) {
const itemData = useContext(ShoppingCartContext);
const {Items} = useShoppingCartContext()

const prodRef = products.find((product) => product)
const itemQuant = Items.find((item) => item)
console.log(item)
return(
<Form>
    <Card>
        <Card.Body>
            <Row>
                <Col>
                    <h3>{prodRef.title}</h3>
                    <h3>{`x${itemQuant.quantity}`}</h3>
                    <Button
                        variant="primary" 
                        size="lg"
                        onClick={() => {itemData.removeOneItem(products)}}
                    >
                        - Remove From Cart
                    </Button>
                </Col>
            </Row>
        </Card.Body>
    </Card>
</Form>
    )
}

export default ItemCard