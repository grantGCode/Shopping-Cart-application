import {Card, Form, Row, Col, Button} from 'react-bootstrap'
import {ShoppingCartContext} from '../CartContext'
import {getProductData} from '../productStore'
import {useContext} from "react"

function ItemCard({item}) {
const cartContext = useContext(ShoppingCartContext);

const prodRef = getProductData(item.id)


return(
<Form>
    <Card>
        <Card.Body>
            <Row>
                <Col>
                    <h3>{prodRef.title}</h3>
                    <h3>{`x${item.quantity}`}</h3>
                    <Button
                        variant="secondary" 
                        size="sm"
                        onClick={() => {cartContext.removeOneItem(item)}}
                    >
                        - RemoveFrom Cart
                    </Button>
                </Col>
            </Row>
        </Card.Body>
    </Card>
</Form>
    )
}

export default ItemCard