import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function Home() {

    return (
      <>
        <h1 style={{marginLeft:"20%", marginTop:"50px"}}>What this site offers you</h1>
        <p style={{marginLeft:"25%", marginTop:"20px", marginRight:"25%"}}>Est veniam proident cillum elit tempor velit excepteur sint ullamco adipisicing adipisicing proident. Dolor adipisicing quis officia adipisicing id irure officia Lorem irure qui reprehenderit magna. Lorem culpa eu labore do dolore mollit deserunt. Fugiat cupidatat deserunt eiusmod minim tempor adipisicing cupidatat. Ex occaecat sit cillum veniam amet ex et mollit exercitation est cillum enim. Labore amet tempor deserunt ut pariatur amet deserunt sit nulla eu ullamco anim incididunt. Labore elit ex ullamco officia dolore et proident.</p>

        <Container style={{marginTop:"50px", marginLeft:"18%", marginBottom:"100px"}}>
            <Row>
                <Col md="12">
                    <h1>Which one are you?</h1><br/>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Button style={{height:"60px", fontSize:"1.5rem"}}>Creators of existing or new campaigns</Button>
                </Col>
                <Col md="6">
                    <Button style={{height:"60px", fontSize:"1.5rem"}}>Management and analysts at GoFundMe</Button>
                </Col>
            </Row>

        </Container>
      </>
    );
  }