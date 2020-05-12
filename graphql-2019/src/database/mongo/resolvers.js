const resolvers = {
    Query: {
        //Product////////////////////////////////////////////////////////////////////////////////////////////////////////
        products: (_, {filter}, {product}) => {
            let options = {};

            if (filter) {
                options = {
                    type: filter.type
                }
            }

            return product.find(options);
        },
        productById: (_, {id}, {product}) => {
            return product.findOne({productId: id});
        },
        //Seller////////////////////////////////////////////////////////////////////////////////////////////////////////
        sellers: (_, __, {seller}) => {
            return seller.find();
        },
        sellerById: (_, {id}, {seller}) => {
            return seller.findOne({sellerId: id});
        }
    },
    Mutation: {
        //Product////////////////////////////////////////////////////////////////////////////////////////////////////////
        addProduct: (_, {productIn}, {product}) => {
            const productModel = new product({
                name: productIn.name,
                description: productIn.description,
                price: productIn.price,
                quantity: productIn.quantity,
                type: productIn.type,
                seller: productIn.seller
            });

            return productModel.save();
        },
        //Seller////////////////////////////////////////////////////////////////////////////////////////////////////////
        addSeller: (_, {sellerIn}, {seller}) => {
            const sellerModel = new seller({
                name: sellerIn.name,
                address: sellerIn.address,
                phone: sellerIn.phone,
                international: sellerIn.international
            });

            return sellerModel.save();
        }
    },
    Product: {
        id: (productOut, __, ___) => {
            return productOut.productId;
        },
        seller: (productOut, __, {seller}) => {
            return seller.findOne({sellerId: productOut.seller});
        },
    },
    Seller: {
        id: (sellerOut, __, ___) => {
            return sellerOut.sellerId;
        },
        products: (sellerOut, __, {product}) => {
            return product.find({seller: sellerOut.sellerId});
        },
    }
};

module.exports = resolvers;
