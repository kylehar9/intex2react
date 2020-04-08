import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Favicon from "./Media/gsLogo.png"

export default function Top(props){

    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to="/">
                <Navbar.Brand><img alt="mountain logo" style={{ width: "60px", marginLeft:"20px"}}src={Favicon} id="logo"></img></Navbar.Brand>
            </Link>
            <Nav>
               <Link to="" style={{ fontSize: "1.5rem", color: "white", textDecoration: "none", marginLeft:"10px" }}>Gane Sarson Consulting</Link>
            </Nav>

        </Navbar>
    )
}