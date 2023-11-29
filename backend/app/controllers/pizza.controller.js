const db = require("../models");
const Pizza = db.pizzas;
const Op = db.Sequelize.Op;

// Create and Save a new Pizza
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty.",
        });
        return;
    }

    // Create a Pizza
    const pizza = {
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients.join(";"),
        allergens: req.body.allergens.join(";"),
    };

    // Save Pizza in the database
    Pizza.create(pizza)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating the Pizza",
            });
        });
};
