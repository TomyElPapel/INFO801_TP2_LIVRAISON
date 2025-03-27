const { DataTypes } = require("sequelize");


module.exports = async function(sequelize) {
    console.log("specification");

    sequelize.define(
        'Specification',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            clientName: DataTypes.STRING,
            cost: DataTypes.FLOAT,
            quantity: DataTypes.FLOAT,
            requirements: DataTypes.STRING,
            delay: DataTypes.DATE,
        },
        {
            createdAt: false,
            updatedAt: false,
        }
    );
};