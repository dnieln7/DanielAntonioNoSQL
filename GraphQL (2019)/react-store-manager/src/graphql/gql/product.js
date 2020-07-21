import gql from "graphql-tag/src";

const PRODUCT_FIELDS = gql`
    fragment ProductFields on Product {
        id
        name
        description
        price
        quantity
    }
`;

export const CREATE = gql`
mutation createSeller($productIn: ProductIn!){
    addProduct(productIn: $productIn) {
        ...ProductFields
    }
}
    ${PRODUCT_FIELDS}
`;

export const GET_DISPLAY_PRODUCTS = gql`
  {
    products {
        ...ProductFields
        seller {
          name
        }
    }
  }
  ${PRODUCT_FIELDS}
`;

export const GET_DETAIL_PRODUCTS = gql`
  {
    products {
        ...ProductFields
        type
        seller {
          name
        }
    }
  }
  ${PRODUCT_FIELDS}
`;
