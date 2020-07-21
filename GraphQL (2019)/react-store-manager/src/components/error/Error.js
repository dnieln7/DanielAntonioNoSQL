import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Error extends Component {
    render() {
        return (
            <Container style={{
                color: "var(--white)",
                position: "fixed",
                top: "25%",
                right: "50% !important",
            }}>
                <Col style={{position: "fixed"}}>
                    <h1>500</h1>
                    <h1>Error</h1>
                    <h2>Something went wrong</h2>
                    <h4>{this.props.error.message}</h4>
                </Col>
            </Container>
        );
    }
}

export default Error;
