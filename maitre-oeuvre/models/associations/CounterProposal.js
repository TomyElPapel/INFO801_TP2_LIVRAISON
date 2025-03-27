const { DataTypes } = require("sequelize");


module.exports = async function(sequelize) {
    console.log("counter proposal");

    const Specification = sequelize.models.Specification;
    const CounterProposal = sequelize.define(
        'CounterProposal',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            delay: DataTypes.FLOAT,
            cost: DataTypes.FLOAT,
            quantity: DataTypes.FLOAT,
        },
        {
            createdAt: false,
            updatedAt: false,
        }
    );

    Specification.hasMany(CounterProposal);
    CounterProposal.belongsTo(Specification);
};