import React from "react";
import { Container, Col, Row } from "react-bootstrap"
//import PRODUCTS from "./products"
import ProductCard from "./product_card"
import {
    useRouteMatch
  } from "react-router-dom";
import AppContext from './context'

export default function Home() {

    return (
      <>
      <div className='home-background' style={{textAlign:"center"}}>

      <h1 style={{color:"white", paddingTop: "15%", fontSize:"4.5rem"}}><b>We're Here To Help You</b>  <i>Help Others</i></h1>

      <h1 style={{color:"white", paddingTop: "13%", fontSize:"3rem"}}>Here's How</h1>
      <i style={{color:"white", fontSize:"3rem"}} class="fa fa-chevron-circle-down"></i>

      </div>

      </>
    );
  }