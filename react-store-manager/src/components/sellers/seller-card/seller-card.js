import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./seller-card.css";

export default class SellerCard extends React.Component {
    render() {
        const {
            name,
            address,
            phone,
            international,
        } = this.props.seller;

        return (
            <Card bg={"light"} className={"mb-2 mt-2"}>
                <Card.Img variant="top" src="https://img.icons8.com/bubbles/500/000000/product.png"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{phone}</Card.Subtitle>
                    <Card.Text>{address}</Card.Text>
                    <Card.Footer>
                        <Form.Check custom type={"checkbox"} label={"international"} checked={international}/>
                    </Card.Footer>
                    <Button variant={"outline-primary"} block>Update</Button>
                    <Button variant={"outline-primary"} block>Delete</Button>
                </Card.Body>
            </Card>
        );
    }
}
