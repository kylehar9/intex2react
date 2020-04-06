import React from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Favicon from "./Media/mountain-logo-png-2.png"
import AppContext from './context'

export default function Top(props){

    const context = React.useContext(AppContext)
    const count = Object.values(context.cart).reduce((a, b) => a + b, 0)
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to="/">
                <Navbar.Brand><img alt="mountain logo" style={{ width: "100px"}}src={Favicon} id="logo"></img><h1 style={{ fontSize: "2rem" }}>Gane & Sarson Consulting</h1></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

        </Navbar.Collapse>
        </Navbar>
    )
}