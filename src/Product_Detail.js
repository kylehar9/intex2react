import React from "react";
import { Container, Col, Row } from "react-bootstrap"
import {
    useRouteMatch, Link
} from "react-router-dom";
import BabyYoda from "./Media/baby-yoda-3.jpg"
import { useState } from "react"
import AppContext from "./context";

export default function Product_Detail() {

    const context = React.useContext(AppContext)

    let [bigImage, setBigImage] = useState(1)

    let match = useRouteMatch("/prod/:pid")
    // let match = useRouteMatch({
    //     path: '/product/:id'
    //     //strict: true,
    //     //sensitive: true
    // })

    let found = context.products[match.params.pid]

    if (!found) {
        return (
            <div style={{ textAlign: "center" }}>
                <img alt="baby yoda" style={{ width: "80%" }} src={BabyYoda}></img>
                <h2 style={{ margin: "5%" }}>This is not the product you are looking for</h2>
                <h3>Product not found</h3>
                <br />
            </div>
        )
    }

    return (
        <Container>
            <Row key={found.id}>
                <Col md="8">
                    <h2 style={{ marginTop: "5%" }}>{found.name}</h2>
                    <h4>${found.price}</h4>
                    <p>{found.description}</p>
                    <Link to="/cart" className="btn btn-lg btn-warning" onClick={e => { 
                        context.addToCart(found.id)
                    }}>Add To Cart</Link>
                </Col>

                <Col md="4">
                    <br />
                    <img style={{
                        right: "5%", top: "25%",
                        borderStyle: "solid", borderWidth: "1px", borderColor: "#DDDDDD",
                        width: "300px", height: "300px"
                    }}
                        src={`${process.env.PUBLIC_URL}/product_images/public/media/products/${found.filename}-${bigImage}.png`} alt="product"></img><br />
                    <Row style={{ marginTop: "2%" }}>
                        <div onMouseEnter={() => { setBigImage(1) }}>
                            <img src={`${process.env.PUBLIC_URL}/product_images/public/media/products/${found.filename}-1.png`} alt="product" className="img-small"></img>
                        </div>

                        <div onMouseEnter={() => { setBigImage(2) }}>
                            <img src={`${process.env.PUBLIC_URL}/product_images/public/media/products/${found.filename}-2.png`} alt="product" className="img-small"></img>
                        </div>

                        <div onMouseEnter={() => { setBigImage(3) }}>
                            <img src={`${process.env.PUBLIC_URL}/product_images/public/media/products/${found.filename}-3.png`} alt="product"className="img-small"></img>
                        </div>

                        <div onMouseEnter={() => { setBigImage(4) }}>
                            <img src={`${process.env.PUBLIC_URL}/product_images/public/media/products/${found.filename}-4.png`} alt="product" className="img-small"></img>
                        </div>
                    </Row>
                </Col>
            </Row>
 
        </Container>
    );
}