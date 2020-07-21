import gql from "graphql-tag/src";

export const GET_DISPLAY_PRODUCTS = gql`
  {
    products {
        id
        name
        description
        price
        seller {
          name
        }
    }
  }
`;

export const GET_DETAIL_PRODUCTS = gql`
  {
    products {
        id
        name
        description
        price
        quantity
        type
        seller {
          name
        }
    }
  }
`;
