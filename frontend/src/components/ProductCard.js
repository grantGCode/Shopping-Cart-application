import { Card, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { products, getProductData} from '../productStore.js'
function ProductCard() {
  return (
    <Form>
        <Card>
            <Card.Body>
                <Card.Title align='center' style={{fontWeight: 'bold'}}>Products Title</Card.Title>
                 <Row xs={1} md={3}>
                    {products.map((products, index) => (
                      <Col align='center' key={index}> 
                          {products.title}{` $${products.price}`}
                          <Button>Add</Button>
                          <Button>Remove</Button>
                      </Col>
                     ))}
                  </Row>
            </Card.Body>
        </Card>
    </Form>
  )
}

export default ProductCard
