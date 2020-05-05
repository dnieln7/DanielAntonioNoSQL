const product = require('./models/product');
const seller = require('./models/seller');

const resolvers = {
    Query: {
        products: (_, {filter}, ___) => {
            let options = {};

            if (filter) {
                options = {
                    type: filter.type
                }
            }

            return product.find(options);
        },
        productById: (_, {id}, ___) => {
            return product.findOne({productId: id});
        },
        sellers: (_, __, ___) => {
            return seller.find();
        },
        sellerById: (_, {id}, ___) => {
            return seller.findOne({sellerId: id});
        }
    },
    Mutation: {
        addProduct: (_, {productIn}, ___) => {
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
        addSeller: (_, {sellerIn}, ___) => {
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
        seller: (productOut, __, ___) => {
            return seller.findOne({sellerId: productOut.seller});
        },
        id: (productOut, __, ___) => {
            return productOut.productId;
        },
    },
    Seller: {
        products: (sellerOut, __, ___) => {
            return product.find({seller: sellerOut.sellerId});
        },
        id: (sellerOut, __, ___) => {
            return sellerOut.sellerId;
        }
    }
};

module.exports = resolvers;
