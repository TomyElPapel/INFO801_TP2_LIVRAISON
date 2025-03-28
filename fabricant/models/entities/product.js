const { DataTypes } = require("sequelize") ;


module.exports = async function(sequelize) {
    sequelize.define(
        'Product',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            ref: {
                type: DataTypes.STRING,
                unique: false,
            },
            name: DataTypes.STRING,
            unitPrice: DataTypes.FLOAT
        }
    );
};