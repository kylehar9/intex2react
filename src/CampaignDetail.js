import React, { useState } from 'react';
import { Container, Col, Row, ProgressBar } from "react-bootstrap"
import {
    useRouteMatch, Link
} from "react-router-dom";
import axios from 'axios'


export default function Campaign_Detail() {

    let match = useRouteMatch("/campaign/:id")

    const [responseState, setResponseState] = useState({});

    const campaign = axios.post('http://localhost:8000/api/campaign', match.params.id).then((response) => {

        setResponseState(response)
    })

    console.log(responseState.data !== undefined && responseState.data.result)

    //let found = context.products[match.params.pid]

    // if (!found) {
    //     return (
    //         <div style={{ textAlign: "center" }}>
    //             <img alt="baby yoda" style={{ width: "80%" }} src={BabyYoda}></img>
    //             <h2 style={{ margin: "5%" }}>This is not the product you are looking for</h2>
    //             <h3>Product not found</h3>
    //             <br />
    //         </div>
    //     )
    // }

    
    let goal = (responseState.data !== undefined && (responseState.data.result.goal))
    let currentAmount = (responseState.data !== undefined && (responseState.data.result.current_amount))
    const progress = (parseFloat((currentAmount / goal)) * 100).toFixed(2)

    const campaign_id = responseState.data !== undefined && responseState.data.result.campaign_id
    const title = responseState.data !== undefined && responseState.data.result.title
    const currency = responseState.data !== undefined && responseState.data.result.currencycode
    const url = responseState.data !== undefined && responseState.data.result.campaign_image_url

    return (
        <Container>
            <Row key={campaign_id}>
                <Col md="8">
                    <h2 style={{ marginTop: "5%" }}>{title}</h2>
                    <h4>Goal: ${goal} {currency}</h4>
                    <h4>Current Amount: ${currentAmount}</h4>
                    <ProgressBar now={progress} label={`${progress}%`} />
                    <h4># of Donators: {responseState.data !== undefined && responseState.data.result.donators}</h4>
                    <h4># of Days Active: {responseState.data !== undefined && responseState.data.result.days_active}</h4>
                    <h4># of Campaign Hearts: {responseState.data !== undefined && responseState.data.result.campaign_hearts}</h4>
                    <h4>Is Charity: {responseState.data !== undefined && responseState.data.result.is_charity}</h4>
                    <p>{responseState.data !== undefined && responseState.data.result.description}</p>

                </Col>

                <Col md="4">
                    <br />
                    <img style={{
                        right: "5%", top: "25%",
                        borderStyle: "solid", borderWidth: "1px", borderColor: "#DDDDDD",
                        width: "300px", height: "300px"
                    }}
                        src={url} alt="product"></img><br />
                    <Row style={{ marginTop: "2%" }}>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}