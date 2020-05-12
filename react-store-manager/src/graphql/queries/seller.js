import gql from "graphql-tag/src";

export const GET_DISPLAY_SELLERS = gql`
  {
    sellers {
        id
        name
        address
        phone
        international
    }
  }
`;

export const GET_DETAIL_SELLERS = gql`
  {
    sellers {
        id
        name
        address
        phone
        international
        products {
          name
        }
    }
  }
`;
