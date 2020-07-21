const resolvers = {
    Query: {
        products: (_, {filter}, {product}) => {
            let options = {};

            if (filter) {
                options = {
                    where: {
                        type: filter.type
                    }
                }
            }

            return product.findAll(options);
        },
        productById: (_, {id}, {product}) => {
            return product.findByPk(id);
        },
        sellers: (_, __, {seller}) => {
            return seller.findAll();
        },
        sellerById: (_, {id}, {seller}) => {
            return seller.findByPk(id);
        }
    },
    Mutation: {
        addProduct: (_, {productIn}, {product}) => {
            return product.create(productIn);
        },
        addSeller: (_, {sellerIn}, {seller}) => {
            return seller.create(sellerIn);
        }
    },
    Product: {
        seller: (productOut, __, {seller}) => {
            return seller.findByPk(productOut.seller);
        }
    },
    Seller: {
        products: (sellerOut, __, {product}) => {
            return product.findAll({where: {seller: sellerOut.id}});
        }
    }
};

module.exports = resolvers;
