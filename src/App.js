import React from "react";
import { Container, Col, Row } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Top from './Top.js'
import Home from "./Home"
import About from "./About"
import Help from "./Help"
import Creators from "./Creators"
import Analysts from "./Analysts"
import Home2 from './Home2'
import CampaignDetail from './CampaignDetail'

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
            <Route path="/creators">
                <Creators />
              </Route>
              <Route path="/analysts">
                <Analysts />
              </Route>
              <Route path="/campaign">
                <CampaignDetail />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/">
                <Home />
                <Home2 />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
