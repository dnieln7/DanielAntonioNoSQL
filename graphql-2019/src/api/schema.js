const {gql} = require('apollo-server');

const typeDefs = gql`
"""------------------------------------------------------------------------------------------------------------------"""
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        quantity: Int
        type: Type
        seller: Seller
    }
    
    input ProductDTO {
        name: String!
        description: String
        price: Float!
        quantity: Int!
        type: Type!
        seller: Int!
    }
    
    input ProductFilter {
        type: String
    }
    
    enum Type{
        CANDY
        MEAT
    }
"""------------------------------------------------------------------------------------------------------------------"""
    type Seller {
        id: ID
        name: String
        address: String
        phone: String
        international: Boolean
        products: [Product]
    }
    
    input SellerDTO {
        name: String
        address: String
        phone: String
        international: Boolean
    }
"""------------------------------------------------------------------------------------------------------------------"""
    type Query {
        products(filter: ProductFilter): [Product]!
        productById(id: ID!): Product!
        
        sellers: [Seller]!
        sellerById(id: ID!): Seller!
    }
     
    type Mutation {
        addProduct(productIn: ProductDTO): Product!
        addSeller(sellerIn: SellerDTO): Seller!
    }
`;

module.exports = typeDefs;
