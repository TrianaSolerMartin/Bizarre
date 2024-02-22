import "../style/Navbar.css"
import { ProductList } from "../services/productService";

import React from "react"


export function Home() {
    return (
        <div className= "container my-5">
            <h2 className="text-center mb-3">YOUR BAZAAR TO BUY ALL THINGS</h2>
            <h1 className="text-center mb-3" style={{color: "#FF4930"}}>BIZARRE</h1>
            <ProductList />
        </div>
    );
}
