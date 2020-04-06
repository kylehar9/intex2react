import React from "react";
import { Container, Col, Row } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Top from './Top.js'
import Left from "./Left"
import Home from "./Home"
import Bottom from "./Bottom"
import Right from "./Right"
import About from "./About"
import Help from "./Help"
import ProductDetail from "./Product_Detail"
import Cart from './Cart'
import Checkout from './Checkout'
import Reciept from './Reciept'
import Home2 from './Home2'

export default function App(props) {
  return (
    <Router>
      <Container fluid className="p-0 min-vh-100 d-flex flex-column">
        <Row nogutters="true" className="flex-grow-0 flex-shrink-0">
          <Col nogutters="true" className="px-3 py-2" style={{ backgroundColor: "black"}}>
            <Top />
          </Col>
        </Row>
        <Row nogutters="true" className="flex-grow-1">
          <Col md="12" > 

            <Switch>
            <Route path="/prod">
                <ProductDetail />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/reciept">
                <Reciept />
              </Route>
              <Route path="/">
                <Home />
                <Home2 />
              </Route>
            </Switch>
          </Col>
        </Row>
        <Row nogutters="true" className="flex-grow-0 flex-shrink-0">
          <Col nogutters="true" className="px-3 py-2" style={{ backgroundColor: "grey", color: "white" }}>
            <Bottom />
             </Col>
        </Row>
      </Container>
    </Router>
  );
}
