const { models } = require("../src/sequelize");
const { Specification } = models;

async function create(clientName, cost, quantity, requirements, delay) {
    return await Specification.create({
        clientName: clientName,
        cost: cost,
        requirements: requirements,
        delay: delay,
        quantity: quantity,
    });
}


async function getAll() {
    return await Specification.findAll();
}



module.exports = {
    create,
    getAll
}