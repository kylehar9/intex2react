import React, { useState, useEffect } from 'react';
import { Container, Col, Row, ProgressBar, Button, Card } from "react-bootstrap"
import {
    useRouteMatch
} from "react-router-dom";
import axios from 'axios'



export default function Campaign_Detail() {

    let match = useRouteMatch("/campaign/:id")

    const [responseState, setResponseState] = useState({});

      useEffect (() => {
        async function fetchData() {
        const campaign = await axios.post('http://localhost:8000/api/campaign', match.params.id)
        setResponseState(campaign)
        }

        fetchData();
        
        
                
      },);
    


    //console.log(responseState.data !== undefined && responseState.data.result)

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

    const campaign_id = responseState.data !== undefined && responseState.data.result.campaign_id
    const title = responseState.data !== undefined && responseState.data.result.title
    const currency = responseState.data !== undefined && responseState.data.result.currencycode
    const url = responseState.data !== undefined ? responseState.data.result.campaign_image_url: ""
    const ssTotal = responseState.data !== undefined && responseState.data.result.social_share_total
    const donators = responseState.data !== undefined && responseState.data.result.donators
    const daysActive = responseState.data !== undefined && responseState.data.result.days_active
    const hearts = responseState.data !== undefined && responseState.data.result.campaign_hearts
    let isCharity = responseState.data !== undefined && responseState.data.result.is_charity
    if (isCharity === "FALSE") {isCharity = "No"} else {isCharity = "Yes"}
    const description = responseState.data !== undefined && responseState.data.result.description
    const goal = (responseState.data !== undefined && (responseState.data.result.goal))
    const currentAmount = (responseState.data !== undefined && (responseState.data.result.current_amount))
    let state = (responseState.data !== undefined && (responseState.data.result.state))
    if (state === "active") {state = "Active"} else {state = "Inactive"}

    const progress = (parseFloat((currentAmount / goal)) * 100).toFixed(2)

    return (
        <Container>
            <Row key={campaign_id}>
                <Col md="4">
                    <Card>
                        <br />
                        <Card.Img variant="top" src={url} />
                        <Card.Body>

                            <h4 style={{color:"green"}}>Goal: ${goal} {currency}</h4>
                            <h4>Current Amount: ${currentAmount}</h4>
                            <h6>Progress:</h6>
                            <ProgressBar style={{ height: "40px" }} now={progress} label={`${progress}%`} />
                            <br />
                            <h5># of Donators: {donators}</h5>
                            <h5># of Days Active: {daysActive}</h5>
                            <h5># of Campaign Hearts: {hearts}</h5>
                            <h5>Social Share Total: {ssTotal}</h5>
                            <h5>Is Charity: {isCharity}</h5>
                            <h5>State: {state}</h5>
                            <br />
                            <Button type="button" href="/analysts">Back To Search</Button>
                        </Card.Body>
                    </Card>
                </Col>


                <Col md="8">
                    <h2 style={{ marginTop: "5%" }}>{title}</h2>
                    <p>{description}</p>
                </Col>
            </Row>

        </Container>
    );
}