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
        <h1 style={{marginLeft:"20%", marginTop:"50px"}}>What this site offers you</h1>
        <p style={{marginLeft:"25%", marginTop:"20px", marginRight:"25%"}}>Est veniam proident cillum elit tempor velit excepteur sint ullamco adipisicing adipisicing proident. Dolor adipisicing quis officia adipisicing id irure officia Lorem irure qui reprehenderit magna. Lorem culpa eu labore do dolore mollit deserunt. Fugiat cupidatat deserunt eiusmod minim tempor adipisicing cupidatat. Ex occaecat sit cillum veniam amet ex et mollit exercitation est cillum enim. Labore amet tempor deserunt ut pariatur amet deserunt sit nulla eu ullamco anim incididunt. Labore elit ex ullamco officia dolore et proident.</p>
      </>
    );
  }