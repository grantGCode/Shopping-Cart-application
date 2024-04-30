import {useContext} from "react"
import { ShoppingCartContext } from '../../CartContext'
import { getProductData } from '../../productStore'
import { Form, } from "./ItemCard.styled";

function ItemCard({item}) {
    const cartContext = useContext(ShoppingCartContext);

    const prodRef = getProductData(item.id)

    return(
        <Form>
            <div className="card">
                <div className="info">
                    <h3 className="title">{prodRef.title}</h3>
                    <h5 className="quantity">{`x${item.quantity}`}</h5>
                </div>
                <button className="remove-button"
                    onClick={() => {cartContext.removeOneItem(item)}}
                >
                    - Remove From Cart
                </button>
            </div>
        </Form>
    )
}

export default ItemCard