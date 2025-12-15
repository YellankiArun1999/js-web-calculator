const express = require("express");
const app = express();

const calculatorRoutes = require("./controllers/calculatorController");

// middleware
app.use(express.json());
app.use(express.static("public"));

// routes
app.use("/", calculatorRoutes);

// start server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

