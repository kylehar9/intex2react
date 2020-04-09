import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap"

export default function Home() {

    return (
      <>

        <Container style={{marginTop:"50px", marginBottom:"100px", textAlign:"center", alignContent:"center"}}>
        <h1 style={{marginTop:"50px"}}>What this site offers you</h1>

        <p style={{marginTop:"20px"}}>As you know, GoFundMe has been receiving even more traffic than usual as people scramble to crowdfund for various causes, many of which are related to the recent COVID-19 pandemic. As such, GoFundMe is in serious need of a web application to help manage the flood of new users and campaigns. We have developed a clean, dual-purpose web application that has two main features: projecting the success of hypothetical new campaigns created by GoFundMe end users, and allowing GoFundMe managers and employees to easily search through existing campaigns and find which ones are most successful.
</p>
            <Row style={{textAlign:"center", alignContent:"center"}}>
                <Col md="12">
                    <h1>Which one are you?</h1><br/>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Button href="creators" className="btn btn-large btn-primary" style={{height:"60px", fontSize:"1.5rem"}}>Campaign Creator</Button><br/><br />
                    <Button href="analysts" className="btn btn-large btn-warning" style={{height:"60px", fontSize:"1.5rem"}}>GoFundMe Management</Button>
                </Col>
            </Row>

        </Container>
      </>
    );
  }