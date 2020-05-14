import gql from "graphql-tag/src";
import {SELLER_DISPLAY_FIELDS} from "../queries/seller";

export const CREATE = gql`
mutation createSeller($sellerIn: SellerIn!){
    addSeller(sellerIn: $sellerIn) {
        ...SellerFields
    }
}
    ${SELLER_DISPLAY_FIELDS}
`;
