'use strict';
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        quantity: DataTypes.INTEGER,
        type: DataTypes.STRING,
        seller: DataTypes.INTEGER
    }, {});
    product.associate = function (models) {
        // associations can be defined here
    };
    return product;
};
