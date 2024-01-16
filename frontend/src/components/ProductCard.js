import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function ProductCard({children}) {
  return (
    <Form>
        <Card>
            <Card.Body>
                <Card.Title>Products</Card.Title>
                <div>{children}</div>
            </Card.Body>
        </Card>
    </Form>
  )
}

export default ProductCard
