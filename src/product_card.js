import React from "react";
import { Card } from "react-bootstrap"
import {Link} from "react-router-dom"

export default function ProductCard(props) {

    return (
        <div>
                <Card style={{ width: 'auto', backgroundColor: " #EEEEEE", textAlign: "center"}}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/product_images/public/media/products/${props.filename}-1.png`} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            ${props.price}
                        </Card.Text>
                        <Link to={`/prod/${props.id}`} className="navbar-brand btn btn-primary position-absolute" style={{ top:"10px", right:"-5px"}} variant="primary">Details</Link>
                        
                    </Card.Body>
                </Card>
        </div>)
}
