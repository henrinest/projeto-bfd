const express = require('express');
const app = express();
const PORT = 3000;

/// Programa básico para print da palavra "Hello World!"

app.get('/', (req, res) => {
    console.log("Requisição realizada");
    res.send("Hello World! Estou no GET");
})

app.post('/', (req, res) => {
    console.log("Requisição realizada / Entrei no POST");
    res.send("Hello World! Estou no POST");
})

app.listen(PORT, () => {
    console.log(`Olá, mundo! App online na porta: ${PORT}`);
})