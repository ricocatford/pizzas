module.exports = (sequelize, Sequelize) => {
    const Pizza = sequelize.define("pizza", {
        name: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        ingredients: {
            type: Sequelize.STRING,
        },
        allergens: {
            type: Sequelize.STRING,
        },
    });

    return Pizza;
};
