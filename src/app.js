/* const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath))

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
}) */

const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "../public");

app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Servidor corriendo en: http://localhost:${port}`));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

//esto es solo para cumplir con lo visual del mercado liebre
app.post("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.post("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});