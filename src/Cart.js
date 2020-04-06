import React from "react";
import {Table, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import AppContext from './context'


export default function Left(props) {

    const context = React.useContext(AppContext)

    const itemsInCart = context.cart

    let productsInCart = []
    for (const c of Object.entries(itemsInCart))
    {
        productsInCart.push(context.products[c[0]])
    }

    let totalPrice = 0
    return (
        <div>
            <h2>Shopping Cart</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {Object.values(productsInCart).map((p, key) => {

                totalPrice += (itemsInCart[p.id] * p.price)
                return(
                    <tr key={"product-" + key}>
                        <td><img src={`${process.env.PUBLIC_URL}/product_images/public/media/products/${p.filename}-1.png`} style={{width: "80px"}} alt="Product"></img></td>
                        <td>{p.name}</td>
                        <td>{itemsInCart[p.id]}</td>
                        <td>${p.price}</td>
                        <td>${(itemsInCart[p.id] * p.price).toFixed(2)}</td>
                        <td><Button variant="danger" onClick={e => { 
                        context.removeFromCart(p.id)
                    }}>Remove</Button></td>
                    </tr>
                    )})}
                </tbody>
            </Table>
            <h3>Total Cost: {totalPrice.toFixed(2)}</h3>
            <Link to="/checkout" className="btn btn-success">Checkout</Link>
        </div>
    )
}

