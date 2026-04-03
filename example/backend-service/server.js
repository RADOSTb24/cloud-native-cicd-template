const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const metricsPort = process.env.METRICS_PORT || 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        service: "backend-service-example",
        status: "ok"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "UP" });
});

app.get("/actuator/health/readiness", (req, res) => {
    res.status(200).json({ status: "UP", type: "readiness" });
});

app.get("/actuator/health/liveness", (req, res) => {
    res.status(200).json({ status: "UP", type: "liveness" });
});

app.listen(port, () => {
    console.log(`Backend app listening on port ${port}`);
});

const metricsApp = express();
metricsApp.get("/actuator/health/readiness", (req, res) => {
    res.status(200).json({ status: "UP", port: metricsPort });
});

metricsApp.get("/actuator/health/liveness", (req, res) => {
    res.status(200).json({ status: "UP", port: metricsPort });
});

metricsApp.listen(metricsPort, () => {
    console.log(`Metrics app listening on port ${metricsPort}`);
});