import client from '../client';
import gql from "graphql-tag/src";

export default function test() {
    const query = gql`
    {  
      products @client {
        id
        name
        type
        seller {
          id
        }
      }
    }
    `;

    client.query({query}).then(value => console.log(value.data.products));
}
