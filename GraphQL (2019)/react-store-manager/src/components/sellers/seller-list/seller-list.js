import "./seller-list.css";

import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import SellerCard from "../seller-card/seller-card";
import {useQuery} from "@apollo/react-hooks";
import Loader from "../../loader/loader";
import {GET_DISPLAY_SELLERS} from "../../../graphql/gql/seller";
import Error from "../../error/Error";


export const SellerList = () => {
    const {loading, error, data} = useQuery(GET_DISPLAY_SELLERS);

    if (loading) {
        return (<Loader/>);
    }

    if (error) {
        return (<Error error={error}/>);
    }

    return (
        <CardDeck>
            {data.sellers.map((value) => <SellerCard seller={value} key={value.id}/>)}
        </CardDeck>
    );
};
