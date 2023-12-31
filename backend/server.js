const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});

const corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req, res) => {
    res.json("Welcome to Pizzas app by Rico Catford.");
});

// Set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
