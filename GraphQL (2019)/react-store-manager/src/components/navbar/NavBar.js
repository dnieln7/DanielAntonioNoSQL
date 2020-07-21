import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
                        <Navbar.Brand href={"/products"}>Store Manager</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href={"/products"}>Products</Nav.Link>
                            <Nav.Link href={"/sellers"}>Sellers</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant={"info"}>Login</Button>
                        </Form>
                    </Navbar>
            </React.Fragment>
        );
    }
}
