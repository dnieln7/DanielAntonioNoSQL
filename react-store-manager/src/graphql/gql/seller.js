import gql from "graphql-tag/src";

const SELLER_FIELDS = gql`
    fragment SellerFields on Seller {
        id
        name
        address
        phone
        international
    }
`;

export const CREATE = gql`
mutation createSeller($sellerIn: SellerIn!){
    addSeller(sellerIn: $sellerIn) {
        ...SellerFields
    }
}
    ${SELLER_FIELDS}
`;

export const GET_MINI_SELLERS = gql`
  {
    sellers {
        id
        name
    }
  }
`;

export const GET_DISPLAY_SELLERS = gql`
  {
    sellers {
        ...SellerFields
    }
  }
    ${SELLER_FIELDS}
`;

export const GET_DETAIL_SELLERS = gql`
  {
    sellers {
        ...SellerFields
        products {
          name
        }
    }
  }
    ${SELLER_FIELDS}
`;
