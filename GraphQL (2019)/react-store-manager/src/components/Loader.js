import React from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

const Loader = () =>
    <Container style={{position:"fixed", top: "50%", left: "50% !important"}}>
        <Spinner animation={"border"} variant={"info"}/>
    </Container>;

export default Loader;
