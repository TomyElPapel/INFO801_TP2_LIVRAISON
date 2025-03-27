const express = require("express");
const router = express.Router();

const { getAll, create } = require("../services/specificationService")

router.post("/", async (req, res, err) => {
    const { clientName, delay, cost, requirements, quantity } = req.body;

    try {
        const specification = await create(clientName, cost, quantity, requirements, delay);
        res.status(200).json(specification);
    } catch(e) {
        res.status(400).send(e);
    }
});

router.get("/all", async (req, res, err) => {
    console.log("ratio")
    try {
        const specifications = await getAll();
        res.status(200).json(specifications);
    } catch(e) {
        res.status(400).send(e);
    }
});


module.exports = router;