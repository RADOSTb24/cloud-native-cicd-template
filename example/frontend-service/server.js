const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/health", (req, res) => {
    res.status(200).json({ status: "UP" });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Frontend app listening on port ${port}`);
});