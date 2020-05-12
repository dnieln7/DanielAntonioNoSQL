import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./product-card.css";

export default class ProductCard extends React.Component {
    render() {
        const {
            name,
            description,
            price,
            seller
        } = this.props.product;

        return (
            <Card bg={"light"} className={"mb-2 mt-2"}>
                <Card.Img variant="top" src="https://img.icons8.com/bubbles/500/000000/product.png"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{seller.name}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <Card.Footer>${price}</Card.Footer>
                    <Button variant={"outline-primary"} block>Update</Button>
                    <Button variant={"outline-primary"} block>Delete</Button>
                </Card.Body>
            </Card>
        );
    }
}
