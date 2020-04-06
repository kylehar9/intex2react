import React from "react";
import { Nav, NavItem } from 'react-bootstrap'
import { Link } from "react-router-dom";
import AppContext from "./context";

export default function Left(props) {

    const context = React.useContext(AppContext)

    
    const categories = {}

    for (const prd of Object.values(context.products)){

		if (context.categories[prd.category].title in categories) {

		  categories[context.categories[prd.category].title] += 1;
		}
		else{

          categories[context.categories[prd.category].title] = 1;
        }
    }


    const cats = Object.entries(categories)


    return (
        <div>
                <Nav variant="pills" defaultActiveKey="/" className="flex-column" style={{fontSize: "15px"}}>
                    <NavItem>
                        <Link to="/" style={{color:"white"}} className="nav-link">All Products ({Object.values(context.products).length})</Link>
                    </NavItem>
                    {Object.values(cats).map(([category, count]) => {
                        return (
                        <Link to={"/category/" + category} style={{color:"white"}} key={"category-" + count} className="nav-link">{category} ({count})</Link>
                        )
                    })}
                </Nav>
        </div>
    );
}