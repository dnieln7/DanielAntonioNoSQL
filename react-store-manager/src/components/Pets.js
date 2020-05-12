import React, {useState} from "react";
import Loader from "./Loader";

import {useQuery, useMutation} from '@apollo/react-hooks'
import gql from "graphql-tag/src";

const ALL = gql`
{  
  products {
    id
    name
    description
    price
    quantity
    type
  }
}
`;

export default function Pets() {
    const {modal, setModal} = useState(false);
    const {data, loading, error} = useQuery(ALL);

    const onSubmit = input => {
        setModal(false);
    };

    if(loading) {
        return <Loader/>
    }

    if(error) {
        return <p>Error</p>
    }

    if(modal) {
      //return <PetModal onSubmit={onSubmit} onCancel={() => setModal(false)}/>
    }

    return <div className={"page pets-page"}>
        <section>
            <div className={"row betwee-xs middle-xs"}>

                <div className={"col-xs-10"}>
                    <h1>Products</h1>
                </div>

                <div className={"col-xs-2"}>
                    <button onClick={() => setModal(true)}>New Product</button>
                </div>
            </div>
        </section>

        <section>
            <PetsList pets={data.products}/>
        </section>
    </div>
}
