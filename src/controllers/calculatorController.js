const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({ operation: "add", a, b, result: a + b });
});

router.get("/subtract", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({ operation: "subtract", a, b, result: a - b });
});

router.get("/multiply", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({ operation: "multiply", a, b, result: a * b });
});

router.get("/divide", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (b === 0) {
        return res.json({ error: "Division by zero not allowed" });
    }

    res.json({ operation: "divide", a, b, result: a / b });
});

module.exports = router;

