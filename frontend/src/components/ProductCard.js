import { Card, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { products, getProductData} from '../productStore.js'
function ProductCard({children}) {
  return (
    <Form>
        <Card>
            <Card.Body>
                <Card.Title>Products Title</Card.Title>
                 <Row xs={1} md={3} className='9-4'>
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
