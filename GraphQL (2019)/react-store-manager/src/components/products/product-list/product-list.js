import "./product-list.css";

import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import {useQuery} from "@apollo/react-hooks";
import Loader from "../../loader/loader";
import {GET_DISPLAY_PRODUCTS} from "../../../graphql/gql/product";
import Error from "../../error/Error";
import ProductCard from "../product-card/product-card";

export const ProductList = () => {
    const {loading, error, data} = useQuery(GET_DISPLAY_PRODUCTS);

    if (loading) {
        return (<Loader/>);
    }

    if (error) {
        return (<Error error={error}/>);
    }

    return (
        <CardDeck>
            {data.products.map((value) => <ProductCard product={value} key={value.id}/>)}
        </CardDeck>
    );
};
