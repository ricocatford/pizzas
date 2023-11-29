module.exports = (app) => {
    const pizzas = require("../controllers/pizza.controller.js");

    var router = require("express").Router();

    // Create a new Recipe
    router.post("/", pizzas.create);
};
