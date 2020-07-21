import "./loader.css";

import React from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

export default class Loader extends React.Component {
    render() {
        return (
            <Container className={"custom-loader"}>
                <Spinner animation={"grow"} variant={"info"}/>
            </Container>
        );
    }
}
