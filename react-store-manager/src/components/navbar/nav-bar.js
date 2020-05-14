import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import  "./nav-bar.css";

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand={"md"} bg="dark" variant="dark" className={"header-text"}>
                <Navbar.Brand href={"/"}>Store Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="menu"/>
                <Navbar.Collapse id="menu">
                    <Nav className="mr-auto">
                        <NavDropdown title="Products" id={"products-menu"}>
                            <NavDropdown.Item href={"/products"}>Products</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href={"/products/add"}>Add Product</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sellers" id={"sellers-menu"}>
                            <NavDropdown.Item href={"/sellers"}>Sellers</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href={"/sellers/add"}>Add seller</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
{/*                    <Form inline>
                        <Button variant={"info"} block>Login</Button>
                    </Form>*/}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
