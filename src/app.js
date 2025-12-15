const express = require("express");
const app = express();

const calculatorRoutes = require("./controllers/calculatorController");

app.use("/", calculatorRoutes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

