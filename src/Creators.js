import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import {Formik} from 'formik'

export default function Creators() {

    return (
        <>
            <Container style={{ marginTop: "50px", marginLeft: "18%", marginBottom: "100px" }}>
                <Row>
                    <Col md="12">
                        <h1>Enter your parameters here</h1><br />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <h2>Formik stuff</h2>
                    </Col>
                </Row>


            </Container>
        </>
    );
}