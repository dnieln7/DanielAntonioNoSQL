import './App.css';

import React from 'react';
import NavBar from "./components/navbar/nav-bar";
import {ProductList} from "./components/products/product-list/product-list";
import {SellerList} from "./components/sellers/seller-list/seller-list";
import Container from "react-bootstrap/Container";
import AddProduct from "./components/products/add-product/add-product";
import {Redirect} from "react-router-dom";
import AddSeller from "./components/sellers/add-seller/add-seller";

const Switch = require("react-router-dom").Switch;
const Route = require("react-router-dom").Route;

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Container fluid>
                <Switch>
                    <Redirect from={"/"} to={"/products"} exact/>
                    <Route path="/products" exact component={ProductList}/>
                    <Route path="/products/add" exact component={AddProduct}/>
                    <Route path="/sellers" exact component={SellerList}/>
                    <Route path="/sellers/add" exact component={AddSeller}/>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
