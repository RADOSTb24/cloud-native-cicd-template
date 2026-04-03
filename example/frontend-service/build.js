const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "dist");
const srcDir = path.join(__dirname, "src");

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

const html = fs.readFileSync(path.join(srcDir, "index.html"), "utf8");
fs.writeFileSync(path.join(distDir, "index.html"), html);

const config = {
    NODE_ENV: process.env.NODE_ENV || "development",
    API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
    AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL || "http://localhost:8080",
    GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
    GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
};

fs.writeFileSync(
    path.join(distDir, "config.js"),
    `window.APP_CONFIG = ${JSON.stringify(config, null, 2)};`
);

console.log("Frontend build completed");