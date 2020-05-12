import React from "react";
import ProductCard from "./product-card/product-card";
import CardDeck from "react-bootstrap/CardDeck";
import {useQuery} from "@apollo/react-hooks";
import {GET_DISPLAY_PRODUCTS} from "../../graphql/queries/product";
import Loader from "../Loader";
import "./product-list.css";
import Container from "react-bootstrap/Container";

export const ProductList = () => {
    let list = [
        {
            id: 1,
            name: "Product 1",
            description: "Description",
            price: 20.50,
            quantity: 52,
            type: "TYPE",
            seller: ["Ricolino"]
        },
    ];

    const {loading, error, data} = useQuery(GET_DISPLAY_PRODUCTS);

    if (loading) {
        return (<Container><Loader/></Container>);
    }

    if (error) {
        return (<p>{error.message}</p>);
    }

    return (
        <CardDeck>
            {data.products.map((value) => <ProductCard product={value} key={value.id}/>)}
        </CardDeck>
    );
};
