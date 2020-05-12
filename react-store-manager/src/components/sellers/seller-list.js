import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import SellerCard from "./seller-card/seller-card";
import {useQuery} from "@apollo/react-hooks";
import Loader from "../Loader";
import {GET_DISPLAY_SELLERS} from "../../graphql/queries/seller";
import "./seller-list.css";


export const SellerList = () => {
    let list = [
        {
            id: 1,
            name: "Product 1",
            address: "Address",
            phone: "2714586565",
            international: true,
            products: ["Tutsi"],
        }
    ];

    const {loading, error, data} = useQuery(GET_DISPLAY_SELLERS);

    if (loading) {
        return (<Loader/>);
    }

    if (error) {
        return (<p>{error.message}</p>);
    }

    return (
        <CardDeck>
            {data.sellers.map((value) => <SellerCard seller={value} key={value.id}/>)}
        </CardDeck>
    );
};
