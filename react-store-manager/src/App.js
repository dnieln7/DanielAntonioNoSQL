import React from 'react';
import NavBar from "./components/navbar/NavBar";
import {ProductList} from "./components/products/product-list";
import {SellerList} from "./components/sellers/seller-list";
import './App.css';
import Container from "react-bootstrap/Container";

const Switch = require("react-router-dom").Switch;
const Route = require("react-router-dom").Route;

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Container>
                <Switch>
                    <Route exact path="/" component={ProductList}/>
                    <Route path="/products" component={ProductList}/>
                    <Route path="/sellers" component={SellerList}/>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
